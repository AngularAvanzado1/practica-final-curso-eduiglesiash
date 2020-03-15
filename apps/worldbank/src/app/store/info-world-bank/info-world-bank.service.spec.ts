import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Country, Region } from '@wb-domain';
import { Observable } from 'rxjs';
import { InfoWorldBankService } from './info-world-bank.service';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import * as fromInfoWorldBank from './info-world-bank.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InfoWorldBankEffects } from './info-world-bank.effects';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterTestingModule } from '@angular/router/testing';

describe('WorldbankService', () => {
  describe('The WorldBankService is compiled', () => {
    let service: InfoWorldBankService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,
          RouterTestingModule,
          StoreModule.forRoot(
            {
              routerNav: routerReducer
            },
            {
              metaReducers: !environment.production ? [] : [],
              runtimeChecks: {
                strictActionImmutability: true,
                strictStateImmutability: true
              }
            }
          ),
          EffectsModule.forRoot([]),
          !environment.production ? StoreDevtoolsModule.instrument() : [],
          StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
          StoreModule.forFeature(fromInfoWorldBank.infoWorldBankFeatureKey, fromInfoWorldBank.reducer),
          EffectsModule.forFeature([InfoWorldBankEffects])
        ]
      });
      service = TestBed.get(InfoWorldBankService);
    });

    it('Should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Should return an observable when call getRegions()', () => {
      const regions$: Observable<Region[]> = service.getRegions();
      expect(regions$).toBeInstanceOf(Observable);
    });


    it('Should return an observable when call getInfoRegions()', () => {
      const id = '1';
      const region$: Observable<Region> = service.getInfoRegion(id);
      expect(region$).toBeInstanceOf(Observable);
    });


    it('Should return an observable when call getCountries()', () => {
      const countries$: Observable<Country[]> = service.getCountries();
      expect(countries$).toBeInstanceOf(Observable);
    });


    it('Should return an observable when call getInfoCountries()', () => {
      const id = 'ESP';
      const country$: Observable<Country> = service.getInfoCountry(id);
      expect(country$).toBeInstanceOf(Observable);
    });

  });
});
