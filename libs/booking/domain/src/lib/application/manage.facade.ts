import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { loadTicket } from '../+state/ticket/ticket.actions';

import * as fromTicket from '../+state/ticket/ticket.reducer';
import * as TicketSelectors from '../+state/ticket/ticket.selectors';

@Injectable({ providedIn: 'root' })
export class ManageFacade {
  loaded$ = this.store.pipe(select(TicketSelectors.getTicketLoaded));
  ticketList$ = this.store.pipe(select(TicketSelectors.getAllTicket));
  selectedTicket$ = this.store.pipe(select(TicketSelectors.getSelected));

  constructor(private store: Store<fromTicket.TicketPartialState>) { }

  load() {
    this.store.dispatch(loadTicket());
  }
}
