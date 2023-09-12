import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GlobalCardsComponent } from "./global-cards/global-cards.component";
import { SavedCardsComponent } from "./saved-cards/saved-cards.component";
import { AppModule } from "../main";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { OneItemComponent } from './one-item/one-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalCardsComponent,
    SavedCardsComponent,
    ListComponent,
    ItemComponent,
    OneItemComponent,
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
