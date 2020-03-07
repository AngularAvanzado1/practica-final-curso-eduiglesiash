import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { UiModule } from '@wb-ui';

const routes: Routes = [
  { path: '', component: CountryComponent }
];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    UiModule,
    CountryRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class CountryModule { }
