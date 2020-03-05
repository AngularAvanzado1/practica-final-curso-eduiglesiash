import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-ui-card-region',
  templateUrl: './card-region.component.html',
  styleUrls: ['./card-region.component.css']
})
export class CardRegionComponent implements OnInit {

  @Input() public region: Region;
  @Output() public selected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public codeSelected(code:string){
    this.selected.next(code);
  }
}
