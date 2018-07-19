import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryFlagsPage } from './country-flags';

@NgModule({
  declarations: [
    CountryFlagsPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryFlagsPage),
  ],
})
export class CountryFlagsPageModule {}
