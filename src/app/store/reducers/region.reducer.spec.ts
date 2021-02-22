import { RegionReducer, initialState, RegionState } from "./region.reducer";
import * as Actions from '../actions/region.actions';

describe('select region', () => {
    it('should update the selected region', () => {
        const oldState: RegionState = {
            ...initialState,
            regionSelected: 'Europe',
            countrySelected: 'Albania'
        };

        const newState: RegionState = {
            ...initialState,
            regionSelected: 'Asia',
            countrySelected: 'India'
        }

        const action = new Actions.RegionSelectedAction('Asia');
        const currentState = RegionReducer(oldState, action);

        expect(currentState.regionSelected).toEqual(newState.regionSelected);
        expect(currentState.regionSelected).not.toBe(oldState.regionSelected);
    });
});
