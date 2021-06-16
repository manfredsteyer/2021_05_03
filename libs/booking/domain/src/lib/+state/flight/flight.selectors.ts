import { createSelector } from '@ngrx/store';
import { BookingPartialState, BOOKING_FEATURE_KEY } from './flight.reducer';

export const getAllFlights = createSelector(
  (app: BookingPartialState) => app[BOOKING_FEATURE_KEY].flightIds,
  (app: BookingPartialState) => app[BOOKING_FEATURE_KEY].flights,
  (ids, flights) => ids.map(id => flights[id]),
);

export const getFlightsWithTickets = createSelector(
  getAllFlights,
  (app: BookingPartialState) => app[BOOKING_FEATURE_KEY].tickets,
  (flights, tickets) => flights.map(f => {
    const ticketIds = f.tickets as number[];
    const ticketArray = ticketIds.map(id => tickets[id as number]);
    return {...f, tickets: ticketArray};
  })
);
