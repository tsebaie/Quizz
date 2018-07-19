import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelebritiesPage } from './celebrities';

@NgModule({
  declarations: [
    CelebritiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CelebritiesPage),
  ],
})
export class CelebritiesPageModule {}
