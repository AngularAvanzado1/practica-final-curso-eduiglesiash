import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Country, Region } from '@wb-domain';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {

  private apiWorldBank = 'http://api.worldbank.org/v2/';

  constructor(
    private http: HttpClient
  ) {
  }

  public getRegions(lang = 'es'): Observable<Region[]> {
    const URL_REGIONS = `${this.apiWorldBank}${lang}/region/?format=json`;
    return this.http.get<Region[]>(URL_REGIONS)
      .pipe(
        // @ts-ignore
        // TODO: No me convence usar map aquí...tengo que buscar otro operador
        map(([metadata, regions]) => regions.filter(item => item['id']))
      );
  }

  public getInfoRegion(id: string, lang: string = 'es'): Observable<Region> {
    const URL_REGION = `${this.apiWorldBank}${lang}/region/${id}/?format=json`;
    return this.http.get(URL_REGION)
      .pipe(
        // @ts-ignore
        // TODO: No me convence usar map aquí...tengo que buscar otro operador
        map(([metadata, region]) => {
          const cloneRegion: Region = region[0];
          return { ...cloneRegion };
        })
      );
  }

  public getCountries(id: string, lang: string = 'es'): Observable<Country[]> {
    const URL_COUNTRIES = `${this.apiWorldBank}${lang}/region/${id}/country?per_page=1000&format=json`;
    return this.http.get(URL_COUNTRIES)
      .pipe(
        // @ts-ignore
        // TODO: No me convence usar map aquí...tengo que buscar otro operador
        map(([metadata, countries]) => {
          const countriesName = countries.filter(item => item.name);
          return [...countriesName];
        })
      );
  }

  public getInfoCountry(id: string, lang: string = 'es'): Observable<Country> {
    const URL_COUNTRY = `${this.apiWorldBank}${lang}/country/${id}/?format=json`;
    return this.http.get(URL_COUNTRY)
      .pipe(
        // @ts-ignore
        map(([metadata, country]) => {
          const copyInfoCountry: Country = country[0];
          console.log(copyInfoCountry);
          return { ...copyInfoCountry };
        }),

      );

  }

}
