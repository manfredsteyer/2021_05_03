import { schema, normalize } from 'normalizr';
import { Flight, FlightState } from './flight';
import { Passenger } from './passenger';
import { TicketState } from './ticket';

export const passengerSchema = new schema.Entity('passengers');

export const ticketSchema = new schema.Entity('tickets', {
  passenger: passengerSchema
});

export const flightSchema = new schema.Entity('flights', {
  tickets: [ticketSchema]
});

export interface NormalizedFlights {
    flights: { [id: number]: FlightState };
    passengers: { [id: number]: Passenger }; 
    tickets: { [id: number]: TicketState };
    flightIds: number[];
}

export function normalizeFlights(denormalized: Flight[]): NormalizedFlights {
    const normalized = normalize(denormalized, [flightSchema]);
    const flights = normalized.entities.flights;
    const passengers = normalized.entities.passengers;
    const tickets = normalized.entities.tickets;
    const flightIds = normalized.result;

    return { flights, passengers, tickets, flightIds };
}

