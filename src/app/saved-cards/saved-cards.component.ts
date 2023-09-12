import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/WeatherService";

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.css']
})
export class SavedCardsComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}
  usersAndWeather: any = [];

  getUsersAndWeather() {
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      // @ts-ignore
      let data = JSON.parse(localStorage.getItem(key));
      console.log(data);
      this.usersAndWeather = [...this.usersAndWeather, data];
    }
  }

  ngOnInit(): void {
    this.getUsersAndWeather();
  }
}
