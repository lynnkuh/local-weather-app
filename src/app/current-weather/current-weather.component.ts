import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: ICurrentWeather

  constructor() {}

  ngOnInit() {

  } 

}
