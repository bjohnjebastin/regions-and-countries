import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  regionSelected$: Observable<string>;

  regionSelectConfig: SelectConfig;
  countrySelectConfig: SelectConfig;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.regions$ = this.store.select(Selectors.selectRegions);
    this.countries$ = this.store.select(Selectors.selectCountries);

    this.regionSelected$ = this.store.select(Selectors.selectRegion);
   
    // Initialise the properties for Region drop down
    this.regionSelectConfig = this.configureSelect('region');

    // Initialise the properties for Country drop down
    this.countrySelectConfig = this.configureSelect('country');
  }

  onRegionChanged(region: string): void {
    this.store.dispatch(new Actions.LoadCountriesAction(region));
  }

  onCountryChanged(country: string): void {  
    this.store.dispatch(new Actions.CountrySelectedAction(country));
  }

  private configureSelect(dropdownFor: string): SelectConfig {
    const config = new SelectConfig();

    // Initialise label
    config.label = dropdownFor === 'region' ? 'Region' : 'Country';

    // Initialise items
    if (dropdownFor === 'region') {
      this.regions$.subscribe(regions => {
        config.items = regions;
      });
    } else {
        this.countries$.subscribe(countries => {
          if (countries !== undefined) {
            config.items = countries.map(country => country.name)
          }
        });
    }
    
    return config;
  }
}
