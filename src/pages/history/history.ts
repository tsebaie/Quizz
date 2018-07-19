import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import questions3 from '../../app/array3';
import {CelebritiesPage} from '../../pages/celebrities/celebrities'
// import {HistoryPage} from '../../pages/history/history'

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  score: number= 0;
  slideOptions: any;
  flashCardFlipped1: boolean = false;
  flashCardFlipped2: boolean = false;
  flashCardFlipped3: boolean = false;
  flashCardFlipped4: boolean = false;
  flashCardFlipped5: boolean = false;

  selected1 : boolean = false;
  correct1 : boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,  private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }


  selectAnswer1(answer) {
    this.flashCardFlipped1 = true;
    this.selected1 = true;
    console.log("choice "+answer);
    console.log("correct answer "+questions3[0].answers[0].answer);
    
    
   
    if(answer == questions3[0].answers[0].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
  }

  selectAnswer2(answer) {
    this.flashCardFlipped2 = true;
    this.selected1 = true;
   //answer == questions[0].answers[0].answer
    if(answer == questions3[1].answers[1].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
}
  selectAnswer3(answer) {
    this.flashCardFlipped3 = true;
    this.selected1 = true;
   
    if(answer == questions3[2].answers[2].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
}
  selectAnswer4(answer) {
    this.flashCardFlipped4 = true;
    this.selected1 = true;
   
    if(answer == questions3[3].answers[0].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
}
  selectAnswer5(answer) {
    this.flashCardFlipped5 = true;
    this.selected1 = true;
   
    if(answer == questions3[4].answers[1].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
    }

    
Send(){

  if(this.score == 5){
    let alert = this.alertCtrl.create({
      title: 'Conirmation',
      subTitle: 'u passed',
      buttons: [
        {
          text: 'Submit',
          role: 'cancel',
          handler: () => {
            this.navCtrl.push(CelebritiesPage);
          }
        }]
    });
    alert.present();

    
  }

  else {

    let alert = this.alertCtrl.create({
      title: 'Conirmation',
      subTitle: 'u fail',
      buttons: ['Dismiss']
    });
    alert.present();
}
  }
}