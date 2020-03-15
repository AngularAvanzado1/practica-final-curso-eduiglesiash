import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComponent } from './country.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@wb-ui';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromInfoWorldBank from '../../store/info-world-bank/info-world-bank.reducer';
import { InfoWorldBankEffects } from '../../store/info-world-bank/info-world-bank.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountryComponent', () => {

  describe('The CountryComponents is compiled', () => {
    let fixture: ComponentFixture<CountryComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          UiModule,
          HttpClientTestingModule,
          RouterTestingModule,
          StoreModule.forRoot(
            {
              routerNav: routerReducer,
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
          EffectsModule.forFeature([InfoWorldBankEffects])],
        declarations: [CountryComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CountryComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should create the component', () => {
      const component = fixture.componentInstance;
      expect(component).toBeTruthy();
    });

    it('Should have a property "title" with value "Country: " ', ()=>{
      const component: CountryComponent = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Country: ');
    })

  });
});
