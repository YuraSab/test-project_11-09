import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GlobalCardsComponent } from "./global-cards/global-cards.component";
import { SavedCardsComponent } from "./saved-cards/saved-cards.component";
import { AppModule } from "../main";

@NgModule({
  declarations: [
    AppComponent,
    GlobalCardsComponent,
    SavedCardsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
