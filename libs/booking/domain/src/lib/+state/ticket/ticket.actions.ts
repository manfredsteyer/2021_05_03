import { createAction, props } from '@ngrx/store';
import { TicketState } from '../../entities/ticket';

export const loadTicket = createAction(
  '[Ticket] Load Ticket'
);

export const loadTicketSuccess = createAction(
  '[Ticket] Load Ticket Success',
  props<{ ticket: TicketState[] }>()
);

export const loadTicketFailure = createAction(
  '[Ticket] Load Ticket Failure',
  props<{ error: any }>()
);
