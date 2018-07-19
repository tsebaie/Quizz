import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationalPage } from './educational';
// import{CountryFlagsPage} from '../../pages/country-flags/country-flags';
@NgModule({
  declarations: [
    EducationalPage,
    // CountryFlagsPage
  ],
  imports: [
    IonicPageModule.forChild(EducationalPage),
  ],
})
export class EducationalPageModule {

  
}

