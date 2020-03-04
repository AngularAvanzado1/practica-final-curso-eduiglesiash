import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {

  private apiWorldBank = 'http://api.worldbank.org/v2/';

  constructor(
    private http: HttpClient
  ) { }

  public getRegions(lang = 'es'): Observable<any>{
    const URL_REGIONS_REQUEST = `${this.apiWorldBank}${lang}/region/?format=json`;
    return this.http.get(URL_REGIONS_REQUEST);
  }

}
