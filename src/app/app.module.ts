import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
