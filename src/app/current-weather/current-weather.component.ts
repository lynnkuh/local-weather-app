import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherservice/weatherservice.service';
import { ICurrentWeather } from '../interfaces/icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherserviceService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Seattle','US')
      .subscribe((data) => this.current = data);
      
  }

}
