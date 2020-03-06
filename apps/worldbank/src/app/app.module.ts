import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DataModule } from '@wb-data';


const MyModules = [
  DataModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...MyModules,
    BrowserModule,
    RouterModule.forRoot([

        {
          path: '',
          loadChildren: () => import('./views/continental-regions/continental-regions.module').then(m => m.ContinentalRegionsModule)
        },
        {
          path: 'region/:code',
          loadChildren: () => import('./views/regions/regions.module').then(m => m.RegionsModule)
        },
        {
          path: 'country',
          loadChildren: () => import('./views/country/country.module').then(m => m.CountryModule)
        }
      ],
      { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
