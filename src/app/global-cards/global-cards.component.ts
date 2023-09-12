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


  async getHeroes() {
    this.users = await this.heroService.getUsers();
    const ff = await this.heroService.getUsers();
    console.log(ff[0]);
    this.getWeather(ff);
  }

  async getWeather(ff: any) {
    console.log("sssssssss",this.users);
    const weather = await this.weatherService.getWeather(ff[0].location.coordinates.latitude, ff[0].location.coordinates.longitude);
    console.log(weather);
    this.weather = weather;
    this.getMinMax(weather);
    this.getIcons(weather.current_weather.weathercode);
  }

  getMinMax(weather: any) {
    const mas = this.weather.hourly.temperature_2m;
    this.lowestForDay = Math.min.apply(Math, mas);
    this.higestForDay = Math.max.apply(Math, mas);
  }
  getIcons(weatherCode: any) {
    this.weatherIcons = this.weatherService.getIcons(weatherCode.toString());
  }


  onSave(user: any, weather: any, lowestForDay: any, higestForDay: any, weatherIcons: any) {
    const userAndWeather = {user: user, weather: weather, lowestForDay: lowestForDay, higestForDay: higestForDay, weatherIcons: weatherIcons };
    localStorage.setItem(`${user.name.title} ${user.name.first} ${user.name.last}`, JSON.stringify(userAndWeather));
    alert(`Saved!`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
