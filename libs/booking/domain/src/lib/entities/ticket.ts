import { Passenger } from './passenger';

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