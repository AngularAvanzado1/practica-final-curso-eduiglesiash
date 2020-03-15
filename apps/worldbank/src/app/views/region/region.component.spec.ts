import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { UiModule } from '@wb-ui';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromInfoWorldBank from '../../store/info-world-bank/info-world-bank.reducer';
import { InfoWorldBankEffects } from '../../store/info-world-bank/info-world-bank.effects';

describe('RegionsComponent', () => {
  describe('The RegionsComponent is compiled', () => {
    let fixture: ComponentFixture<RegionComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          UiModule,
          RouterTestingModule,
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
        declarations: [RegionComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(RegionComponent);
      fixture.detectChanges();
    });

    it('Should create the component', () => {
      const component: RegionComponent = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });

    it('Should have a property "title" with value "shop"', ()=> {
      const component: RegionComponent = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Region: ');
    });

  });
});
