import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private API_URL = 'https://restcountries.eu/rest/v2/region/';

  constructor(private http: HttpClient) { }

  public getCountries(region: string):Observable<Country[]> {
    return this.http.get<Country[]>(this.API_URL + region);
  }
}
