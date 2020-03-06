import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContinentalRegionsRoutingModule } from './continental-regions-routing.module';
import { ContinentalRegionsComponent } from './continental-regions.component';
import { UiModule } from '@wb-ui';

const routes: Routes = [
  { path: '', component: ContinentalRegionsComponent }
];

@NgModule({
  declarations: [ContinentalRegionsComponent],
  imports: [
    CommonModule,
    ContinentalRegionsRoutingModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class ContinentalRegionsModule { }
