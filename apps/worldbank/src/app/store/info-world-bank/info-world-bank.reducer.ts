import { Action, createReducer, on } from '@ngrx/store';
import * as infoWbActions from './info-world-bank.actions';
import { Country, Region } from '@wb-domain';

export const infoWorldBankFeatureKey = 'infoWorldBank';

export interface WorldBankState {
  idRegion: string,
  lang: string,
  continentalRegionLoad: string,
  continentalRegionError: any,
  continentalRegions: Region[]
  listCountries: Country[];
  listCountriesLoad: string,
  listCountriesError: any
}

export const initialState: WorldBankState = {
  idRegion: 'null',
  lang: 'null',
  continentalRegionLoad: null,
  continentalRegionError: null,
  continentalRegions: [],
  listCountries: [],
  listCountriesLoad: null,
  listCountriesError: null
};


// Inicizalizacion del estado
const infoWorldBankReducer = createReducer(
  initialState,
  on(infoWbActions.loadInfoContinentalRegion, (state, payload ) => {
    return {
      ...state,
      lang: payload.newLang
    }
}),
  on(infoWbActions.loadInfoContinentalRegionSuccess, (state, payload) => {
    return {
      ...state,
      continentalRegionLoad: payload.newLoadState,
      continentalRegions: payload.newRegions
    };
  }),
  on(infoWbActions.loadInfoContinentalRegionError, (state, payload) => {
    return {
      ...state,
      continentalRegionLoad: payload.newLoadState,
      continentalRegionError: payload.newLoadError,
      continentalRegions: payload.newState
    };
  }),
  on(infoWbActions.loadListCountryForRegion, (state, payload) => {
    return {
      ...state,
      idRegion: payload.newIdRegion,
      codeRegion: payload.newCodeRegion
    };
  }),
  on(infoWbActions.loadListCountryForRegionSuccess, (state, payload)=> {
    return {
      ...state,
      listCountries: payload.newListCountry,
      listCountriesLoad: payload.newListCountriesLoad
    }
  }),
  on(infoWbActions.loadListCountryForRegionError, (state, payload)=> {
    return {
      ...state,
      listCountries: payload.newListCountry,
      listCountriesLoad: payload.newListCountriesLoad,
      listCountriesError: payload.newListCountriesError
    }
  })
);

export function reducer(state: WorldBankState | undefined, action: Action) {
  return infoWorldBankReducer(state, action);
}
