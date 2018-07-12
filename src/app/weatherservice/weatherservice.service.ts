import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable } from 'rxjs';
import { ICurrentWeather } from 'src/app/interfaces/icurrent-weather';
import { map } from 'rxjs/operators';


interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string,
    id: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
} 

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private httpClient: HttpClient) { }

// using city string or number so you can type in a city or a zip code
getCurrentWeather(
  search: string | number,
  country?: string
): Observable<ICurrentWeather> {
  let uriParams = ''
  if (typeof search === 'string') {
    uriParams = `q=${search}`
  } else {
    uriParams = `zip=${search}`
  }

  if (country) {
    uriParams = `${uriParams},${country}`
  }
  console.log(uriParams)
  return this.getCurrentWeatherHelper(uriParams)
}

    private getCurrentWeatherHelper(uriParams: string): 
    Observable<ICurrentWeather> {
      return this.httpClient
        .get<ICurrentWeatherData>(
          `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=${environment.appId}`
        )
        .pipe(map(data =>this.transformToICurrentWeather(data)))
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
      weatherId: data.weather[0].id
    }
  }

    private convertKelvinToFahrenheit(kelvin: number): number {
      return kelvin * 9/5 - 459.67
    }
}
