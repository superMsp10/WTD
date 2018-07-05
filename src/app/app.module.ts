import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualScrapperComponent } from './manual-scrapper/manual-scrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualScrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
