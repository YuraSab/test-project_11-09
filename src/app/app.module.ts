import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GlobalCardsComponent } from "./global-cards/global-cards.component";
import { SavedCardsComponent } from "./saved-cards/saved-cards.component";
import { ItemComponent } from './item/item.component';
// @ts-ignore
import { AppModule } from "../main";

@NgModule({
  declarations: [
    AppComponent,
    GlobalCardsComponent,
    SavedCardsComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // @ts-ignore
    AppModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
// @ts-ignore
export class AppModule { }
