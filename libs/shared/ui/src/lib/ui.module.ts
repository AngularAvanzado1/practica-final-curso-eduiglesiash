import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRegionComponent } from './card-region/card-region.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardRegionComponent],
  exports: [CardRegionComponent]
})
export class UiModule {}
