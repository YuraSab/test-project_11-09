import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {Weather} from "../models/weather";

type userAndWeather = {
  user: User,
  weather: Weather,
  lowestForDay: number,
  higestForDay: number,
  weatherIcons: string[],
}

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.css']
})
export class SavedCardsComponent implements OnInit {

  usersAndWeather: userAndWeather[] = [];

  getUsersAndWeather() {
    for (let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      // @ts-ignore
      let data = JSON.parse(localStorage.getItem(key));
      this.usersAndWeather = [...this.usersAndWeather, data];
    }
  }

  ngOnInit(): void {
    this.getUsersAndWeather();
  }
}
