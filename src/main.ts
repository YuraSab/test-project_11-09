import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {RouterModule, Routes} from "@angular/router";
import {GlobalCardsComponent} from "./app/global-cards/global-cards.component";
import {SavedCardsComponent} from "./app/saved-cards/saved-cards.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {ItemComponent} from "./app/item/item.component"

const routes: Routes = [
  { path: 'global', component: GlobalCardsComponent },
  { path: 'saved', component: SavedCardsComponent },
  { path: '', redirectTo: 'global', pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, ItemComponent],
  declarations: [
    AppComponent,
    GlobalCardsComponent,
    SavedCardsComponent,
    ItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
;
