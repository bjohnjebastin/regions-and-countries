import { Country } from "src/app/models/country.model";
import { RegionAction, RegionActionTypes } from "../actions/region.actions";

export const regionFeatureKey = 'region';

export interface RegionState {
    regions: Array<string>;
    countries: Array<Country>;
    regionSelected: string;
    countrySelected: string;
    loading: boolean;
    error: Error
}

const initialState: RegionState = {
    regions: [
        'Europe',
        'Asia'
    ],
    countries: [],
    regionSelected: '',
    countrySelected: '',
    loading: false,
    error: undefined
}

export function RegionReducer(state: RegionState = initialState, action: RegionAction) {
    switch(action.type) {
        case RegionActionTypes.LOAD_REGIONS:
            return {
                ...state,
                regions: action.payload,
                loading: false
            };
        case RegionActionTypes.LOAD_COUNTRIES:
            return {
                ...state,
                loading: true
            };
        
        case RegionActionTypes.LOAD_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };

        case RegionActionTypes.LOAD_COUNTRIES_FAILURE:
            return {
                ...state,
                error: action.payload,
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