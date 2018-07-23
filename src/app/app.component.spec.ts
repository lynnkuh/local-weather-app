import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherserviceService } from './weatherservice/weatherservice.service';
import { WeatherserviceServiceFake } from './weatherservice/weatherservice.service.fake';
import { NoopAnimationsModule } from
'@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule,
MatCardModule, MatFormFieldModule, MatInputModule } from
'@angular/material';
import { FormsModule, ReactiveFormsModule } from
'@angular/forms';
import { CitySearchComponent} from './city-search/city-search.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        CitySearchComponent
      ],
       providers: [{ provide: WeatherserviceService, useClass: 
      WeatherserviceServiceFake}],
      imports: [MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Current Weather');
  }));
});
