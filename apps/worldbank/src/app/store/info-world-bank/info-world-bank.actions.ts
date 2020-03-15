import { createAction, props } from '@ngrx/store';
import { Country, Region } from '@wb-domain';


/*
*
* LOAD INFO CONTINENTAL REGIONS
*
* */
export const loadInfoContinentalRegion = createAction(
  '[InfoWorldBank] Load Info Continental Region',
  props<{ newLang: string }>()
);

export const loadInfoContinentalRegionSuccess = createAction(
  '[InfoWorldBank] Load Info Continental Region Success',
  props<{ newLoadState: string, newRegions: Region[] }>()
);

export const loadInfoContinentalRegionError = createAction(
  '[InfoWorldBank] Load Info Continental Region Error',
  props<{ newLoadState: string, newLoadError: any, newState: [] }>()
);


/*
*
* LOAD LIST COUNTRY FOR CONTINENTAL REGION
*
* */

export const loadListCountryForRegion = createAction(
  '[InfoWorldBank] Loading the list of countries by region',
  props<{ newCodeRegion: string, lang: string, newIdRegion: string}>()
);

export const loadListCountryForRegionSuccess = createAction(
  '[InfoWorldBank] Loading the list of countries by region Success',
  props<{ newListCountriesLoad: string, newListCountry: Country[]}>()
);

export const loadListCountryForRegionError = createAction(
  '[InfoWorldBank] Loading the list of countries by region Error',
  props<{ newListCountriesLoad: string, newListCountry: Country[], newListCountriesError: any }>()
);

