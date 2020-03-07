import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { UiModule } from '@wb-ui';

const routes: Routes = [
  { path: '', component: RegionComponent }
];

@NgModule({
  declarations: [RegionComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class RegionModule { }
