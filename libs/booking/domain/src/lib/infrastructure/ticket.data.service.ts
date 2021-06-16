import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {TicketState} from '../entities/ticket';

@Injectable({ providedIn: 'root' })
export class TicketDataService {

    constructor(private http: HttpClient) {
    }

    load(): Observable<TicketState[]> {

        // Uncomment if needed
        /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Ticket[]>(url, {params, headers});
        */
        
        return of([
        ]);
      }
}
