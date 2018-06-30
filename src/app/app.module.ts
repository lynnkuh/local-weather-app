import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherserviceService } from './weatherservice/weatherservice.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule

  ],
  providers: [WeatherserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
