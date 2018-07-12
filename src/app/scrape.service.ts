import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

  constructor(private http: HttpClient) { }

  ScrapeURL(url: string): Observable<Object> {
    console.log("hello");
    return this.http.get("https://us-central1-scraper-b60a3.cloudfunctions.net/helloWorld");
  }

}
