import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalRegionsComponent } from './continental-regions.component';
import { UiModule } from '@wb-ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromInfoWorldBank from '../../store/info-world-bank/info-world-bank.reducer';
import { InfoWorldBankEffects } from '../../store/info-world-bank/info-world-bank.effects';

describe('ContinentalRegionComponent', () => {

  describe('The Continental Region Component is compiled', () => {
    let fixture: ComponentFixture<ContinentalRegionsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
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
        declarations: [ContinentalRegionsComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContinentalRegionsComponent);
      fixture.detectChanges();
    });

    it('Should create the component', () => {
      const component: ContinentalRegionsComponent = fixture.componentInstance;
      expect(component).toBeTruthy();
    });

    it('Should have a property "title" with value "Continental Regions"', ()=>{
      const component: ContinentalRegionsComponent = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Continental Regions');
    });

    it('Should have a property "regions$" is defined', ()=>{
      const component: ContinentalRegionsComponent = fixture.debugElement.componentInstance;
      expect(component.regions$).toBeDefined();
    })
  });
});
