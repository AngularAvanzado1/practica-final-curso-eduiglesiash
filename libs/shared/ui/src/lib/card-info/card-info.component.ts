import { Component, Input } from '@angular/core';
import { Country } from '@wb-domain';

@Component({
  selector: 'wb-ui-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent{

  @Input() public info: Country;

  constructor() { }
}
