import { Observable } from "rxjs/internal/Observable";
import { ICurrentWeather } from
"src/app/interfaces/icurrent-weather";

export interface IWeatherService {
    getCurrentWeather(city: string, country: string):
    Observable<ICurrentWeather>
}