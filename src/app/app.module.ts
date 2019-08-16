import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
