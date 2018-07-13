import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/functions';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

  functions: firebase.functions.Functions;

  constructor() {
    this.functions = firebase.initializeApp(environment.firebase).functions();
  }

  ScrapeURL(url: string): Observable<string> {

    var scrape = firebase.functions().httpsCallable('scrape');
    console.log(url);
    return from(
      scrape({ scrapeURL: url })
        .then(function (result) {
          console.log(result);
          return result.data.scrape;
        }).catch(function (error) {
          // Getting the Error details.
          var code = error.code;
          var message = error.message;
          var details = error.details;
          return "Error: " + message;
        })
    );
  }

  // var addMessage = firebase.functions().httpsCallable('addMessage');
  // console.log(url);
  // return from(
  //   addMessage({ text: url }).then(function (result) {
  //     return result.data.text;
  //   }).catch(function (error) {
  //     // Getting the Error details.
  //     var code = error.code;
  //     var message = error.message;
  //     var details = error.details;
  //     return message;
  //   })
  // );
}



