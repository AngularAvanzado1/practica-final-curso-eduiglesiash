import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as infoWbActions from './info-world-bank.actions';
import { Country, Region } from '@wb-domain';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class InfoWorldBankEffects {

  private apiWorldBank = 'http://api.worldbank.org/v2/';


  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }

  public loadInfoWorldBanks$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(infoWbActions.loadInfoContinentalRegion),
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        concatMap(() => {
            const URL_REGIONS = `${this.apiWorldBank}es/region/?format=json`;
            return this.http.get<Region[]>(URL_REGIONS)
              .pipe(
                map(([metadata, regions]) => {
                  return infoWbActions.loadInfoContinentalRegionSuccess({
                    newLoadState: 'loaded',
                    // @ts-ignore
                    newRegions: regions.filter(item => item.id)
                  });
                }),
                catchError(err => {
                  return of(infoWbActions.loadInfoContinentalRegionError({
                    newLoadError: err,
                    newLoadState: 'loadError',
                    newState: []
                  }));
                })
              );
          }
        )
      )
  );

  public loadListCountryForRegion$ = createEffect(()=>
    this.actions$
      .pipe(
        ofType(infoWbActions.loadListCountryForRegion),
        concatMap((action)=>{
          const codeRegion = action.newCodeRegion;
          const lang = action.lang;
          const URL_REGION = `${this.apiWorldBank}${lang}/region/${codeRegion}/country?per_page=1000&format=json`;
          return this.http.get<Country[]>(URL_REGION)
            .pipe(
              map(([metadata, country]) => {
                return infoWbActions.loadListCountryForRegionSuccess({
                  newListCountriesLoad: 'loaded',
                  //@ts-ignore
                  newListCountry: [...country]
                })
              }),
              catchError(err => of(infoWbActions.loadListCountryForRegionError({
                newListCountry: [],
                newListCountriesLoad: 'loadError',
                newListCountriesError: err
              })))
            )

        })
      )
  )


}
