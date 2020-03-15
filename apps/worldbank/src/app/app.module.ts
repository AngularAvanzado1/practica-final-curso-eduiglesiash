import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromInfoWorldBank from './store/info-world-bank/info-world-bank.reducer';
import { InfoWorldBankEffects } from './store/info-world-bank/info-world-bank.effects';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import(
              './views/continental-regions/continental-regions.module'
              ).then(m => m.ContinentalRegionsModule)
        },
        {
          path: 'region/:id',
          loadChildren: () =>
            import('./views/region/region.module').then(m => m.RegionModule)
        },
        {
          path: 'country/:id',
          loadChildren: () =>
            import('./views/country/country.module').then(m => m.CountryModule)
        },
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: ''
        }
      ],
      { initialNavigation: 'enabled' }
    ),
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
    EffectsModule.forFeature([InfoWorldBankEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
