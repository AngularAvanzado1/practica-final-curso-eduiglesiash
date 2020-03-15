import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import * as infoWBReducer from './info-world-bank.reducer';

export const selectInfoWorldBankState = createFeatureSelector<infoWBReducer.WorldBankState>(
  infoWBReducer.infoWorldBankFeatureKey
);


export const getStore = createSelector(
  selectInfoWorldBankState,
  (state:infoWBReducer.WorldBankState)=> state
);

export const getStateLoadRegion = createSelector(
  selectInfoWorldBankState,
  (state: infoWBReducer.WorldBankState) => state.continentalRegionLoad
);

export const getRegions = createSelector(
  selectInfoWorldBankState,
  (state: infoWBReducer.WorldBankState) => state.continentalRegions
);

export const getInfoRegion = createSelector(
  selectInfoWorldBankState,
  (state: infoWBReducer.WorldBankState, props) => {
    return state.continentalRegions.filter(item => {
      return item.id === props.idRegion
    })[0];
  }
);

export const getCountries = createSelector(
  selectInfoWorldBankState,
  (state)=> state.listCountries
);

export const getIdRegion = createSelector(
  selectInfoWorldBankState,
  (state)=> state.idRegion
);

export const getInfoCountry = createSelector(
  selectInfoWorldBankState,
  (state, props) => {
    return state.listCountries.filter(country => country.id === props.id)[0]
  }
)
