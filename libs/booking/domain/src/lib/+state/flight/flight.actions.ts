import { createAction, props } from '@ngrx/store';
import { NormalizedFlights } from '../../entities/schema';

export const loadFlight = createAction(
  '[Flight] Load Flight'
);

export const loadFlightSuccess = createAction(
  '[Flight] Load Flight Success',
  props<{ flights: NormalizedFlights }>()
);

export const loadFlightFailure = createAction(
  '[Flight] Load Flight Failure',
  props<{ error: any }>()
);
