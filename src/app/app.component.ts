import { Component } from '@angular/core';

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
   <div class="weather__card">
    <h2>Current Weather</h2>
    <app-current-weather></app-current-weather>
    </div>
   <!-- <img mat-card-image src="assets/seattlebg-day.jpg"> -->
  </div>
`
})
export class AppComponent {
  title = 'app';
}