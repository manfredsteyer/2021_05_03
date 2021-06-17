import { Ticket } from './ticket';

// Inner State: Consider moving this into the +state folder
export interface FlightState {
    id: number;
    from: string;
    to: string;
    date: string;

    tickets: number[];
}

// Entity
export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string;

    tickets: Ticket[];
}

// ViewModel
export interface FlightVM {
    id: number;
    route: string;
    date: string;

    tickets: Ticket[];
}

// Another ViewModule
export interface DetailsVM {
    route: string;
    firstName: string;
    lastName: string;
    ticketId: string;
    flightDate: string
}