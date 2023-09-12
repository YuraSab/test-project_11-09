import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GlobalCardsComponent } from "./global-cards/global-cards.component";
import { SavedCardsComponent } from "./saved-cards/saved-cards.component";
import { ItemComponent } from './item/item.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

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
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule { }
