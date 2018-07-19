import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import questions from '../../app/Array';

 import{CountryFlagsPage} from '../../pages/country-flags/country-flags';

 import { AlertController } from 'ionic-angular';


/**
 * Generated class for the EducationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-educational',
  templateUrl: 'educational.html',
})
export class EducationalPage {

  @ViewChild('slides') Slides: any;
score: number= 0;

slideoptions: any;
questions: any;


// -------------------------------------------
  slideOptions: any;
  flashCardFlipped1: boolean = false;
  flashCardFlipped2: boolean = false;
  flashCardFlipped3: boolean = false;
  flashCardFlipped4: boolean = false;
  flashCardFlipped5: boolean = false;


  selected1 : boolean = false;
  correct1 : boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams , private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }



  selectAnswer1(answer) {
    this.flashCardFlipped1 = true;
    this.selected1 = true;
    console.log("choice "+answer);
    console.log("correct answer "+questions[0].answers[0].answer);
    
    
   
    if(answer == questions[0].answers[0].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
  }

  selectAnswer2(answer) {
    this.flashCardFlipped2 = true;
    this.selected1 = true;
   //answer == questions[0].answers[0].answer
    if(answer == questions[1].answers[1].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
}
  selectAnswer3(answer) {
    this.flashCardFlipped3 = true;
    this.selected1 = true;
   
    if(answer == questions[2].answers[2].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
}
  selectAnswer4(answer) {
    this.flashCardFlipped4 = true;
    this.selected1 = true;
   
    if(answer == questions[3].answers[0].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
}
  selectAnswer5(answer) {
    this.flashCardFlipped5 = true;
    this.selected1 = true;
   
    if(answer == questions[4].answers[1].answer ){
      this.score +=1;
      console.log("Score "+this.score);
    }
    }

    
Check(){

  if(this.score == 5){
    let alert = this.alertCtrl.create({
      title: 'Conirmation',
      subTitle: 'u passed',
      buttons: [
        {
          text: 'Submit',
          role: 'cancel',
          handler: () => {
            this.navCtrl.push(CountryFlagsPage);
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

// restartQuiz() {
//   this.score = 0;
//   this.Slides.lockSwipes(false);
//   this.Slides.slideTo(1, 1000);
//   this.Slides.lockSwipes(true);
// }
// submit(){
//   this.navCtrl.push(CountryFlagsPage);

// }


}
