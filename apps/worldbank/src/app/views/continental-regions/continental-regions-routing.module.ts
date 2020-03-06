import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentalRegionsComponent } from './continental-regions.component';

const routes: Routes = [{ path: '', component: ContinentalRegionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentalRegionsRoutingModule { }
