import {Component, NgModule} from '@angular/core';
import {GlobalCardsComponent} from "./global-cards/global-cards.component";
import {SavedCardsComponent} from "./saved-cards/saved-cards.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'test-project_11-09';
}
