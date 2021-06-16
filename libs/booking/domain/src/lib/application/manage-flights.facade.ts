import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromFlight from '../+state/flight/flight.reducer';
import * as FlightSelectors from '../+state/flight/flight.selectors';

@Injectable({ providedIn: 'root' })
export class ManageFlightsFacade {
  flightList$ = this.store.pipe(select(FlightSelectors.getAllFlights));

  constructor(private store: Store<fromFlight.BookingPartialState>) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
