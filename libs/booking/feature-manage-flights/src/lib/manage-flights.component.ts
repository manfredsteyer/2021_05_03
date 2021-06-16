import { Component, OnInit} from '@angular/core';
import { ManageFlightsFacade, loadFlight } from '@flight-workspace/booking/domain';

@Component({
  selector: 'booking-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.scss']
})
export class ManageFlightsComponent implements OnInit {
    
    
    flightList$ = this.manageFlightsFacade.flightList$;


    constructor(private manageFlightsFacade: ManageFlightsFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.manageFlightsFacade.dispatch(loadFlight());
    }

}

