import {Injectable} from "@angular/core";
import { weatherCodeToKey, WeatherKeys } from "src/data/Weather/Weather";

@Injectable({
  providedIn: 'root',
})

export class WeatherService{

  url = "https://api.open-meteo.com/v1/forecast?latitude=-19.7962&longitude=178.2180&current_weather=true&hourly=temperature_2m";


  async getWeather() {
    let response = await fetch(this.url);
    const data = await response.json();
    // console.log(data.results[0].gender);
    console.log(`weather data`,data);

    // return data.results;
    return data;
  }

  // https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&apikey=${this.apiKey}
  async getWeatherByCoordinates(latitude: string, longitude: string) {
    console.log(latitude, longitude);
    const urla = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(urla);
    const data = await response.json();
    console.log(`true data`,data);

    // let response = await fetch(this.url);
    // const data = await response.json();
    // // console.log(data.results[0].gender);
    // console.log(data);

    return data.results;
  }

  getIcons(weatherCode: any) {
    // @ts-ignore
    const key = weatherCodeToKey[weatherCode];
    // @ts-ignore
    const icons = WeatherKeys[key];
    console.log(`icons`,icons);
    return icons
  }

}
