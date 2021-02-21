import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/appstate.model";
import { RegionState } from "../reducers/region.reducer";

export const selectFeature = (state: AppState) => state.region;

export const selectRegions = createSelector(
    selectFeature,
    (state: RegionState) => state.regions
);

export const selectCountries = createSelector(
    selectFeature,
    (state: RegionState) => state.countries.get(state.regionSelected)
);

export const selectRegion = createSelector(
    selectFeature,
    (state: RegionState) => state.regionSelected
);

export const selectCountry = createSelector(
    selectFeature,
    (state: RegionState) => {
        if (state.regionSelected !== '' && state.countries.get(state.regionSelected) !== undefined) {
            return state.countries.get(state.regionSelected).find(
                (country) => country.name === state.countrySelected
            );
        }

        return null;
    }
);