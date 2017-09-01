import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { helloworldComponent } from "./helloworld/app.helloworldComponent";

@NgModule({
  declarations: [
    AppComponent,
    helloworldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
