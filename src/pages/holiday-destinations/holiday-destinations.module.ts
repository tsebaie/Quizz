import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayDestinationsPage } from './holiday-destinations';

@NgModule({
  declarations: [
    HolidayDestinationsPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayDestinationsPage),
  ],
})
export class HolidayDestinationsPageModule {}
