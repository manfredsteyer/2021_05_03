import { Ticket, TicketState } from './ticket';

export interface FlightState {
    id: number;
    from: string;
    to: string;
    date: string;

    tickets: number[];
}

export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string;

    tickets: Ticket[];
}
