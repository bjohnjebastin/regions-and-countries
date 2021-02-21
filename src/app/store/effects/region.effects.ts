import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';
import { LoadCountriesAction, LoadCountriesFailureAction, LoadCountriesSuccessAction, RegionActionTypes } from '../actions/region.actions';

@Injectable()
export class RegionEffects {

  @Effect() loadCountries$ = this.actions$
    .pipe(
      ofType<LoadCountriesAction>(RegionActionTypes.LOAD_COUNTRIES),
      mergeMap(
        ((action) => this.countryService.getCountries(action.payload)
          .pipe(
            map(data => {
              return new LoadCountriesSuccessAction(data)
            }),
            catchError(error => of(new LoadCountriesFailureAction(error)))
          )
      )),
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) { }
}