import { Country } from 'src/app/models/country.model';
import { RegionAction, RegionActionTypes } from '../actions/region.actions';

export const regionFeatureKey = 'region';

export interface RegionState {
    regions: Array<string>;
    countries: Map<string, Array<Country>>;
    regionSelected: string;
    countrySelected: string;
    loading: boolean;
    error: Error;
}

export const initialState: RegionState = {
    regions: [
        'Europe',
        'Asia'
    ],
    countries: new Map<string, Array<Country>>(),
    regionSelected: '',
    countrySelected: '',
    loading: false,
    error: undefined
};

export function RegionReducer(state: RegionState = initialState, action: RegionAction) {

    switch (action.type) {
        case RegionActionTypes.LOAD_REGIONS:
            return {
                ...state,
                regions: action.payload,
                loading: false
            };

        case RegionActionTypes.LOAD_COUNTRIES:
            return {
                ...state,
                regionSelected: action.payload,
                loading: true
            };

        case RegionActionTypes.LOAD_COUNTRIES_SUCCESS:
            const regionSelected = state.regionSelected;
            const countriesToLoad = state.countries;
            countriesToLoad.set(regionSelected, action.payload);
            return {
                ...state,
                countries: countriesToLoad,
                loading: false
            };

        case RegionActionTypes.LOAD_COUNTRIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case RegionActionTypes.REGION_SELECTED:
            return {
                ...state,
                regionSelected: action.payload,
                loading: false
            };

        case RegionActionTypes.COUNTRY_SELECTED:
            return {
                ...state,
                countrySelected: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
