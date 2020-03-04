import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';

const routes: Routes = [
  { path: '', component: RegionsComponent }
];

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class RegionsModule { }
