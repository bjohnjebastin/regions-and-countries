import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appstate.model';
import { Country } from 'src/app/models/country.model';
import { SelectConfig } from 'src/app/models/selectConfig.model';
import * as Actions from '../../store/actions/region.actions';
import * as Selectors from '../../store/selectors/region.selectors';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regions$: Observable<Array<string>>;
  countries$: Observable<Array<Country>>;

  regionSelectConfig: SelectConfig;
  countrySelectConfig: SelectConfig;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.regions$ = this.store.select(Selectors.selectRegions);
    this.countries$ = this.store.select(Selectors.selectCountries);

    const config = new SelectConfig();
    config.label = 'Region';
    this.regions$.subscribe(regions => {
      config.items = regions
    });

    this.regionSelectConfig = config;

    const cConfig = new SelectConfig();
    cConfig.label = 'Country';
    this.countries$.subscribe(x => { 
      cConfig.items = x.map(y => y.name)
    });
    this.countrySelectConfig = cConfig;
  }

  onRegionChanged(region: string): void {
    this.store.dispatch(new Actions.LoadCountriesAction(region));
  }

  onCountryChanged(country: string): void {  
    this.store.dispatch(new Actions.CountrySelectedAction(country));
  }
}
