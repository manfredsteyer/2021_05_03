import { Passenger } from './passenger';

// Inner State: Consider moving this into the +state folder
export interface TicketState {
    id: number;
    price: number;

    passenger: number;
}

export interface Ticket {
    id: number;
    price: number;

    passenger: Passenger;
}