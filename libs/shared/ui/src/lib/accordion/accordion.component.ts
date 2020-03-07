import { Component, Input, OnInit } from '@angular/core';
import { CountriesData } from '@wb-domain';

@Component({
  selector: 'wb-ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() public title: string;
  @Input() public data: CountriesData;
  public accordionState = false;
  constructor() { }

  ngOnInit(): void {
  }

  public isVisibleAccordion(status: boolean){
    this.accordionState = !this.accordionState;
  }

}
