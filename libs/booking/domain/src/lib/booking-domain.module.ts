import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketEffects } from './+state/ticket/ticket.effects';
import * as fromTicket from './+state/ticket/ticket.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromTicket.TICKET_FEATURE_KEY, fromTicket.reducer), EffectsModule.forFeature([TicketEffects])],
})
export class BookingDomainModule {}
