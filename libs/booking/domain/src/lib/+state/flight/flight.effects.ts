import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FlightActions from './flight.actions';
import { FlightDataService } from '../../infrastructure/flight.data.service';
import { normalizeFlights } from '../../entities/schema';


@Injectable()
export class FlightEffects {
  loadFlight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlightActions.loadFlight),
      switchMap((action) =>
        this.flightDataService.load().pipe(
          map((flight) =>
            FlightActions.loadFlightSuccess({ flights: normalizeFlights(flight) })
          ),
          catchError((error) =>
            of(FlightActions.loadFlightFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private flightDataService: FlightDataService
  ) { }
}
