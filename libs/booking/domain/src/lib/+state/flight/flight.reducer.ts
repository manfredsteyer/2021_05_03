import { createReducer, on, Action } from '@ngrx/store';
import * as FlightActions from './flight.actions';
import { NormalizedFlights } from '../../entities/schema';

export const BOOKING_FEATURE_KEY = 'booking';

export type State = NormalizedFlights;

export interface BookingPartialState {
  readonly [BOOKING_FEATURE_KEY]: State;
}

export const initialState: State = {
  flights: {},
  passengers: {},
  tickets: {},
  flightIds: []
};

const flightReducer = createReducer(
  initialState,
  on(FlightActions.loadFlight,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(FlightActions.loadFlightSuccess,
    (state, action ) => {
      return {...state, ...action.flights }
    }
  ),
  on(FlightActions.loadFlightFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return flightReducer(state, action);
}
