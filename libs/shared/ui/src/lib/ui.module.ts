import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTemplateComponent } from './card-template/card-template.component';
import { CardLinkComponent } from './card-link/card-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CardTemplateComponent, CardLinkComponent],
  exports: [CardTemplateComponent, CardLinkComponent]
})
export class UiModule {}
