import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRegionComponent } from './card-region/card-region.component';
import { CardTemplateComponent } from './card-template/card-template.component';
import { CardCountryComponent } from './card-country/card-country.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardRegionComponent, CardTemplateComponent, CardCountryComponent],
  exports: [CardRegionComponent, CardTemplateComponent, CardCountryComponent]
})
export class UiModule {}
