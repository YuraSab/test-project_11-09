import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {WeatherService} from "../services/weather.service";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Weather} from "../models/weather";

@Component({
  selector: 'app-global-cards',
  templateUrl: './global-cards.component.html',
  styleUrls: ['./global-cards.component.css']
})

export class GlobalCardsComponent implements OnInit {

  constructor(private userService: UserService, private weatherService: WeatherService) {
    this.users = this.userService.users;
    this.weather$ = this.weatherService.weather;
  }

  users: Observable<User[]>;
  weather$: Observable<Weather>;
  lowestForDay: number = 0;
  higestForDay: number = 0;
  weatherIcons: any = [];

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.getWeather(users);
    });
  }

  getWeather(users: any) {
    this.weatherService
      // .getWeather(users.location.coordinates.latitude, users.location.coordinates.longitude)
      .getWeather(users[0].location.coordinates.latitude, users[0].location.coordinates.longitude)
      .subscribe((weather: Weather) => {
        console.log(`weather!!!!!!!!!!!!!`,weather);
        this.getMinMax(weather);
        this.getIcons(weather.current_weather.weathercode);
      });
  }

  getMinMax(weather: any) {
    const masOfDegrees = weather.hourly.temperature_2m;
    this.lowestForDay = Math.min.apply(Math, masOfDegrees);
    this.higestForDay = Math.max.apply(Math, masOfDegrees);
  }

  getIcons(weatherCode: any) {
    let icons = this.weatherService.getIcons(weatherCode.toString());
    if (!icons) icons = this.weatherService.getIcons("100");
    this.weatherIcons = icons;
  }


  onSave(user: any, weather: any, lowestForDay: any, higestForDay: any, weatherIcons: any) {
    const userAndWeather = {user: user, weather: weather, lowestForDay: lowestForDay, higestForDay: higestForDay, weatherIcons: weatherIcons };
    localStorage.setItem(`${user.name.title} ${user.name.first} ${user.name.last}`, JSON.stringify(userAndWeather));
    alert(`Saved!`);
  }


  ngOnInit(): void {
    this.getUsers();
  }
}
