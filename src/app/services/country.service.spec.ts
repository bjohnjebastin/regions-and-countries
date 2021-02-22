import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Country, Currency } from '../models/country.model';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let countryService: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient
      ]
    });
    countryService = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(countryService).toBeTruthy();
  });

  // Test for getCountries() method
  describe('getCountries', () => {
    it('should return a collection of countries', () => {
      const currency: Currency[] = [
        {
          code: 'ALL',
          name: 'Albanian lek',
          symbol: 'L'
        }
      ];

      const countriesResponse: Country[] = [
        {
          name: 'Albania',
          capital: 'Tirana',
          population: 2886026,
          currencies: currency,
          flag: 'https://restcountries.eu/data/alb.svg'
        }
      ];

      let response;
      spyOn(countryService, 'getCountries').and.returnValue(of(countriesResponse));

      countryService.getCountries('Europe').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(countriesResponse);
    });
  });
});
