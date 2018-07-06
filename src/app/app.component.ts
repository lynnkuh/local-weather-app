import { Component } from '@angular/core';
import { ICurrentWeather } from 'src/app/interfaces/icurrent-weather';
import { WeatherserviceService } from './weatherservice/weatherservice.service';



@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <mat-toolbar color="primary">
    LocalCast Weather
  </mat-toolbar>
  <mat-card>
   <div>Your city, your forecast, right now!</div>
  </mat-card>
   <div>
    <app-city-search (searchEvent)="doSearch($event)"></app-city-search>
   </div>
   <div class="weather__card">
    <h2>Current Weather</h2>
    <app-current-weather [current]="currentWeather"></app-current-weather>
    </div>
   <!-- <img mat-card-image src="assets/seattlebg-day.jpg"> -->
  </div>
`
})
export class AppComponent {
  currentWeather: ICurrentWeather


constructor(private weatherService: WeatherserviceService) {}


  doSearch(searchValue) {

    const userInput = searchValue.split(',').map(s => s.trim())
    console.log(this.weatherService)
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => this.currentWeather = data)
  }
}
