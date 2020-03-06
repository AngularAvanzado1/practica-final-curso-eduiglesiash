import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContinentalRegionRoutingModule } from './continental-region-routing.module';
import { ContinentalRegionComponent } from './continental-region.component';
import { UiModule } from '@wb-ui';

const routes: Routes = [
  { path: '', component: ContinentalRegionComponent }
];

@NgModule({
  declarations: [ContinentalRegionComponent],
  imports: [
    CommonModule,
    ContinentalRegionRoutingModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class ContinentalRegionModule { }
