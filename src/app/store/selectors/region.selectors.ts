import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/appstate.model";
import { RegionState } from "../reducers/region.reducer";

export const selectFeature = (state: AppState) => state.region;

export const selectRegions = createSelector(
    selectFeature,
    (state: RegionState) => state.regions
)

export const selectRegion = createSelector(
    selectFeature,
    (state: RegionState) => state.regionSelected
);

export const selectCountry = createSelector(
    selectFeature,
    (state: RegionState) => {
        return state.countries.find(
            (country) => country.name === state.countrySelected
        )
    }
)

export const selectCountries= createSelector(
    selectFeature,
    (state: RegionState) => state.countries
);