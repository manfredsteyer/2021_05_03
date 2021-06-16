import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../entities/ticket';

export const loadTicket = createAction(
  '[Ticket] Load Ticket'
);

export const loadTicketSuccess = createAction(
  '[Ticket] Load Ticket Success',
  props<{ ticket: Ticket[] }>()
);

export const loadTicketFailure = createAction(
  '[Ticket] Load Ticket Failure',
  props<{ error: any }>()
);
