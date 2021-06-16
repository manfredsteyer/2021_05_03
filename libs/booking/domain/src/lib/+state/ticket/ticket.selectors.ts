import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TICKET_FEATURE_KEY, State, TicketPartialState, ticketAdapter } from './ticket.reducer';

// Lookup the 'Ticket' feature state managed by NgRx
export const getTicketState = createFeatureSelector<TicketPartialState, State>(TICKET_FEATURE_KEY);

const { selectAll, selectEntities } = ticketAdapter.getSelectors();

export const getTicketLoaded = createSelector(
  getTicketState,
  (state: State) => state.loaded
);

export const getTicketError = createSelector(
  getTicketState,
  (state: State) => state.error
);

export const getAllTicket = createSelector(
  getTicketState,
  (state: State) => selectAll(state)
);

export const getTicketEntities = createSelector(
  getTicketState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTicketState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTicketEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
