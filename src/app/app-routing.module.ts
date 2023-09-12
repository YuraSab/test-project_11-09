import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GlobalCardsComponent} from "./global-cards/global-cards.component";
import {SavedCardsComponent} from "./saved-cards/saved-cards.component";

const routes: Routes = [
  { path: 'global', component: GlobalCardsComponent },
  { path: 'saved', component: SavedCardsComponent },
  { path: '', redirectTo: 'global', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
