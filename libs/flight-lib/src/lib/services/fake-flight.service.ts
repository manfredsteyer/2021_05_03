import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Flight} from '../models/flight';
import {fakeFlights}  from './fake-flight.data';

@Injectable({
  providedIn: 'root'
})
export class FakeFlightService {

  flights: Flight[] = [];

  load(from: string, to: string, urgent: boolean): void {
    this.find(from, to, urgent)
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => console.error('Error loading flights', err)
      );
  }

  find(from: string, to: string, urgent: boolean = false): Observable<Flight[]> {

    if (urgent) {
      return throwError({status: 403});
    }

    return of(
      fakeFlights.filter(f => f.from.toLowerCase().startsWith(from.toLowerCase())
          && f.to.toLowerCase().startsWith(to.toLowerCase())
      )
    );
  }

  findById(id: string): Observable<Flight> {
    return of(
      fakeFlights.find(f => f.id === parseInt(id, 10))
    )
  }

  save(flight: Flight): Observable<Flight> {

    if (!flight.id) {
      fakeFlights.push(flight);
    }
    else {
      const flightToUpdate = fakeFlights.find(f => f.id === flight.id);
      Object.assign(flightToUpdate, flight);
    }

    return of(flight);
  }

  delay() {
    const ONE_MINUTE = 1000 * 60;

    const oldFlights = this.flights;
    const oldFlight = oldFlights[0];
    const oldDate = new Date(oldFlight.date);

    // Mutable
    oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE);
    oldFlight.date = oldDate.toISOString();
  }

}
