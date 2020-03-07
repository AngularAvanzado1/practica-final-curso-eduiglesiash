import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkComponent } from './card-link/card-link.component';
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './card-info/card-info.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CardLinkComponent, CardInfoComponent],
  exports: [CardLinkComponent, CardInfoComponent]
})
export class UiModule {
}
