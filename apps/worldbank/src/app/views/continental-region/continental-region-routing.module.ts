import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentalRegionComponent } from './continental-region.component';

const routes: Routes = [{ path: '', component: ContinentalRegionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentalRegionRoutingModule { }
