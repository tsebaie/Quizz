import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { EducationalPage } from '../pages/educational/educational';
import { CountryFlagsPage } from '../pages/country-flags/country-flags';
import { HistoryPage } from '../pages/history/history';
import{ HolidayDestinationsPage } from '../pages/holiday-destinations/holiday-destinations';
import {CelebritiesPage} from '../pages/celebrities/celebrities';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EducationalPage,
    FlashCardComponent,
    CountryFlagsPage,
    HolidayDestinationsPage,
    HistoryPage,
    CelebritiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EducationalPage,
    CountryFlagsPage,
    HolidayDestinationsPage,
    HistoryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
