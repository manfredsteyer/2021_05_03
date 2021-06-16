import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class BookingFeatureManageModule {}
