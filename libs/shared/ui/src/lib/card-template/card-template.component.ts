import { Component, Input, OnInit } from '@angular/core';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-ui-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent implements OnInit {

  @Input() public region: Region;

  constructor() { }

  ngOnInit(): void {
  }

}
