import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TicketActions from './ticket.actions';
import { Ticket } from '../../entities/ticket';

export const TICKET_FEATURE_KEY = 'ticket';

export interface State extends EntityState<Ticket> {
  selectedId ?: string | number;          // which Ticket record has been selected
  loaded      : boolean;                  // has the Ticket list been loaded
  error      ?: string | null;            // last known error (if any)
}

export interface TicketPartialState {
  readonly [TICKET_FEATURE_KEY]: State;
}

export const ticketAdapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const initialState: State = ticketAdapter.getInitialState({
  // set initial required properties
  loaded : false
});

const ticketReducer = createReducer(
  initialState,
  on(TicketActions.loadTicket,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(TicketActions.loadTicketSuccess,
    (state, { ticket }) => ticketAdapter.upsertMany(ticket, { ...state, loaded: true })
  ),
  on(TicketActions.loadTicketFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return ticketReducer(state, action);
}
