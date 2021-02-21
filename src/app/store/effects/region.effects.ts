import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';

import { EMPTY, of } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';
import * as RegionActions from '../actions/region.actions';
import { selectCountries } from '../selectors/region.selectors';
import { AppState } from 'src/app/models/appstate.model';

@Injectable()
export class RegionEffects {

  selectRegion$ = createEffect(() => this.actions$
    .pipe(
      ofType<RegionActions.RegionSelectedAction>(RegionActions.RegionActionTypes.REGION_SELECTED),
      withLatestFrom(this.store.select(selectCountries)),
      mergeMap(([action, countries]) => {
        if (countries !== undefined) {
          return EMPTY;
        }

        return of(new RegionActions.LoadCountriesAction(action.payload));
      })
  ));

 loadCountries$ = createEffect(() => this.actions$
    .pipe(
      ofType<RegionActions.LoadCountriesAction>(RegionActions.RegionActionTypes.LOAD_COUNTRIES),
      mergeMap(
        ((action) => this.countryService.getCountries(action.payload)
          .pipe(
            map(data => {
              return new RegionActions.LoadCountriesSuccessAction(data);
            }),
            catchError(error => of(new RegionActions.LoadCountriesFailureAction(error)))
          )
      )),
  ));

  constructor(
    private actions$: Actions,
    private countryService: CountryService,
    private store: Store<AppState>
  ) { }
}
