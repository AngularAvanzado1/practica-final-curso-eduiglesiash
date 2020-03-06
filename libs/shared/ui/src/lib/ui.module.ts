import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRegionComponent } from './card-region/card-region.component';
import { CardTemplateComponent } from './card-template/card-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardRegionComponent, CardTemplateComponent],
  exports: [CardRegionComponent, CardTemplateComponent]
})
export class UiModule {}
