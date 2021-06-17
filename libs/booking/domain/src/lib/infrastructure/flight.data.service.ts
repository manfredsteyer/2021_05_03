import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Flight } from '../entities/flight';

@Injectable({ providedIn: 'root' })
export class FlightDataService {

    constructor(private http: HttpClient) {
    }

    load(): Observable<Flight[]> {

        return of([
            { 
                id: 1,
                from: 'Graz',
                to: 'Hamburg',
                date: new Date().toISOString(),
                tickets: [
                    { 
                        id: 2000,
                        price: 300,
                        passenger: {
                            id: 30000,
                            firstName: 'Jane',
                            lastName: 'Doe'
                        }
                    },
                    { 
                        id: 2001,
                        price: 300,
                        passenger: {
                            id: 30001,
                            firstName: 'John',
                            lastName: 'Doe'
                        }
                    }

                ]
            }
        ]);
      }
}
