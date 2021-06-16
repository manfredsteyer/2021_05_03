import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlightEffects } from './+state/flight/flight.effects';
import * as fromFlight from './+state/flight/flight.reducer';

@NgModule({
  imports: [
    CommonModule, 
    StoreModule.forFeature(fromFlight.BOOKING_FEATURE_KEY, fromFlight.reducer), 
    EffectsModule.forFeature([FlightEffects])],
})
export class BookingDomainModule { }
