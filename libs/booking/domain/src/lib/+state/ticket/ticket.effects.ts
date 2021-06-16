import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TicketActions from './ticket.actions';
import { TicketDataService } from '../../infrastructure/ticket.data.service';

@Injectable()
export class TicketEffects {
  loadTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.loadTicket),
      switchMap((action) =>
        this.ticketDataService.load().pipe(
          map((ticket) =>
            TicketActions.loadTicketSuccess({ ticket })
          ),
          catchError((error) =>
            of(TicketActions.loadTicketFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private ticketDataService: TicketDataService
  ) { }
}
