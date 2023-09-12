import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {WeatherService} from "../../services/WeatherService";

@Component({
  selector: 'app-global-cards',
  templateUrl: './global-cards.component.html',
  styleUrls: ['./global-cards.component.css']
})

export class GlobalCardsComponent implements OnInit {

  constructor(private heroService: UserService, private weatherService: WeatherService) {}

  users: any = [];
  weather: any;
  lowestForDay: number = 0;
  higestForDay: number = 0;
  weatherIcons: any = [];

  async getUsers() {
    const users = await this.heroService.getUsers();
    this.users = users;
    this.getWeather(users);
  }

  async getWeather(users: any) {
    const weather = await this.weatherService.getWeather(users[0].location.coordinates.latitude, users[0].location.coordinates.longitude);
    this.weather = weather;
    this.getMinMax(weather);
    this.getIcons(weather.current_weather.weathercode);
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
