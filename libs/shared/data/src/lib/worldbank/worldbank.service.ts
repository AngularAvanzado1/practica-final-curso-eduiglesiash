import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {

  private apiWorldBank = 'http://api.worldbank.org/v2/';

  constructor(
    private http: HttpClient
  ) {
  }

  public getRegions(lang = 'es'): Observable<any> {
    const URL_REGIONS = `${this.apiWorldBank}${lang}/region/?format=json`;
    return this.http.get(URL_REGIONS)
      .pipe(
        // @ts-ignore
        map(([metadata, regions]) => regions.filter(item => item['id']))
      );
  }
  public getInfoRegion(code: string, lang:string = 'es'){
    const URL_REGION = `${this.apiWorldBank}${lang}/region/${code}/?format=json`;
    return this.http.get(URL_REGION)
      .pipe(
        // @ts-ignore
        map(([metadata, region]) => region)
      );
  }

  public getContinentalRegions(code: string, lang: string = 'es'): Observable<any> {
    const URL_CONTINENTAL_REGIONS = `${this.apiWorldBank}${lang}/region/${code}/country?per_page=1000&format=json`;
    return this.http.get(URL_CONTINENTAL_REGIONS)
      .pipe(
        // @ts-ignore
        map(([metadata, countries]) => countries)
      );
  }

}
