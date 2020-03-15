import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, Region } from '@wb-domain';
import { Store } from '@ngrx/store';
import * as infoWbActions from './info-world-bank.actions';
import * as infoWbSelect from './info-world-bank.selectors';

@Injectable({
  providedIn: 'root'
})
export class InfoWorldBankService {

  private apiWorldBank = 'http://api.worldbank.org/v2/';

  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) {
  }

  public loadRegions(lang = 'es') {
    this.store.dispatch(infoWbActions.loadInfoContinentalRegion({
      newLang: lang
    }));
  }

  public getRegions(): Observable<Region[]> {
    return this.store.select(infoWbSelect.getRegions);
  }

  public getInfoRegion(id: string): Observable<Region> {
    return this.store.select(infoWbSelect.getInfoRegion, { idRegion: id });
  }

  public getIdRegion() {
    return this.store.select(infoWbSelect.getIdRegion);
  }

  public loadListCountries(code: string, id: string) {
    return this.store.dispatch(infoWbActions.loadListCountryForRegion({
      newCodeRegion: code,
      newIdRegion: id,
      lang: 'es'
    }));
  }

  public getCountries(): Observable<Country[]> {
    return this.store.select(infoWbSelect.getCountries);
  }

  public getInfoCountry(id: string ): Observable<Country> {
    return this.store.select(infoWbSelect.getInfoCountry, {id: id})
  }

}
