import { Action } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';

export enum RegionActionTypes {
    LOAD_REGIONS = '[REGION] Load Regions',
    LOAD_COUNTRIES = '[REGION] Load Countries',
    LOAD_COUNTRIES_SUCCESS = '[REGION] Load Countries Success',
    LOAD_COUNTRIES_FAILURE = '[REGION] Load Countries Failure',
    REGION_SELECTED = '[REGION] Region selected',
    COUNTRY_SELECTED = '[REGION] Country selected'
}

export class LoadRegionsAction implements Action {
    readonly type = RegionActionTypes.LOAD_REGIONS;

    constructor(public payload: Array<string>) { }
}

export class LoadCountriesAction implements Action {
    readonly type = RegionActionTypes.LOAD_COUNTRIES;

    constructor(public payload: string) { }
}

export class LoadCountriesSuccessAction implements Action {
    readonly type = RegionActionTypes.LOAD_COUNTRIES_SUCCESS;

    constructor(public payload: Array<Country>) { }
}

export class LoadCountriesFailureAction implements Action {
    readonly type = RegionActionTypes.LOAD_COUNTRIES_FAILURE;

    constructor(public payload: Error) { }
}

export class RegionSelectedAction implements Action {
    readonly type = RegionActionTypes.REGION_SELECTED;

    constructor(public payload: string) { }
}

export class CountrySelectedAction implements Action {
    readonly type = RegionActionTypes.COUNTRY_SELECTED;

    constructor(public payload: string) { }
}

export type RegionAction = LoadRegionsAction |
    LoadCountriesAction |
    LoadCountriesSuccessAction |
    LoadCountriesFailureAction |
    RegionSelectedAction |
    CountrySelectedAction;
