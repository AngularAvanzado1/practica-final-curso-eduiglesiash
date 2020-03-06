import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-ui-card',
  templateUrl: './card-region.component.html',
  styleUrls: ['./card-region.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRegionComponent {

  @Input() public info: Region;
  @Output() public infoSelected: EventEmitter<string> = new EventEmitter();

  public codeSelected(code: Region){
    this.infoSelected.next(code);
  }
}
