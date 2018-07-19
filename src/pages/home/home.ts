import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EducationalPage } from '../educational/educational';
import {DataProvider} from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  next(){
  this.navCtrl.push(EducationalPage);
  }
}
