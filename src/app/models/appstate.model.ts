import { RegionState } from "../store/reducers/region.reducer";
import { Country } from "./country.model";

export interface AppState {
    region: RegionState;
}