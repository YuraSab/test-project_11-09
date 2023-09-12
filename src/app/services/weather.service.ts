import {Injectable} from "@angular/core";
import {weatherCodeToKey, WeatherKeys} from "src/data/weather/weather";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Weather} from "../models/weather";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

export class WeatherService {

  constructor( private httpClient: HttpClient ) {}

  private readonly url = "https://api.open-meteo.com/v1";
  // @ts-ignore
  public weather: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(null);

  public getWeather(latitude: number, longitude: number): Observable<Weather> {
    return this.httpClient
      .get<Weather>(`${this.url}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`).pipe(
        tap(weather => this.weather.next(weather))
      )
  }

  getIcons(weatherCode: any) {
    // @ts-ignore
    const key = weatherCodeToKey[weatherCode];
    // @ts-ignore
    const icons = WeatherKeys[key];
    return icons
  }
}
