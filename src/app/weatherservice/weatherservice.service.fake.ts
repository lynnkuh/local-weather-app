import { IWeatherService } from '../interfaces/iweather-service';
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import { Observable, of } from 'rxjs';

export class WeatherserviceServiceFake implements IWeatherService {
    private fakeWeather: ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: new Date(),
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle',
        weatherId: '15'
    }

    public getCurrentWeather(city: string, country: string):
    Observable<ICurrentWeather>{
        return of(this.fakeWeather)
    }
}