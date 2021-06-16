import { Component, OnInit} from '@angular/core';
import { ManageFacade, loadTicket } from '@flight-workspace/booking/domain';

@Component({
  selector: 'booking-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    
    
    ticketList$ = this.manageFacade.ticketList$;


    constructor(private manageFacade: ManageFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.manageFacade.load();
    }

}

