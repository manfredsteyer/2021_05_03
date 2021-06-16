import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookingFeatureManageModule } from '@flight-workspace/booking/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureManageFlightsModule } from '@flight-workspace/booking/feature-manage-flights';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), !environment.production ? StoreDevtoolsModule.instrument() : [], EffectsModule.forRoot(), BookingFeatureManageModule, HttpClientModule, BookingFeatureManageFlightsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
