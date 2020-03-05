import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-ui-card-region',
  templateUrl: './card-region.component.html',
  styleUrls: ['./card-region.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRegionComponent {

  @Input() public region: Region;
  @Output() public selected: EventEmitter<string> = new EventEmitter();

  public codeSelected(code:string){
    this.selected.next(code);
  }
}
