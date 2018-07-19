import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MethodCall } from '@angular/compiler';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  // load() {

  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }

  //   return new Promise(resolve => {

  //     this.http.get('assets/data/questions.json').map=>
  //     (res => res.json()).apply(data => {
  //       this.data = this.data.questions;
  //       resolve(this.data);
  //     });
  //   }

    load(){
 
      if(this.data){
          return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

          this.http.get('assets/data/questions.json').map(res => res).subscribe(data => {
              this.data = data;
              console.log(this.data)
              resolve(this.data);
          });

      });

  }
}


// Am using a data provider, i have a load function that will handle loading in the data,
// fetch it and return which already has my questions in an array and answer as a Method
// trying to convert the json into an object and also by using map operator
//API