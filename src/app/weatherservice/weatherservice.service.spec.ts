import { TestBed, inject } from '@angular/core/testing';

import { WeatherserviceService } from './weatherservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherserviceService]
    });
  });

  it('should be created', inject([WeatherserviceService], (service: WeatherserviceService) => {
    expect(service).toBeTruthy();
  }));
});
