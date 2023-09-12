import {Injectable} from "@angular/core";
import {weatherCodeToKey, WeatherKeys} from "src/data/Weather/Weather";

@Injectable({
  providedIn: 'root',
})

export class WeatherService {

  url = "https://api.open-meteo.com/v1";

  async getWeather(latitude: any, longitude: any) {
    const response = await fetch(`${this.url}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`);
    const data = await response.json();
    // console.log(`weather data`, data);
    return data;
  }

  getIcons(weatherCode: any) {
    // @ts-ignore
    const key = weatherCodeToKey[weatherCode];
    // @ts-ignore
    const icons = WeatherKeys[key];
    // console.log(icons);
    return icons
  }
}
