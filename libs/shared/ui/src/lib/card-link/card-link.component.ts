import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-ui-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardLinkComponent {

  @Input() public info: Region;
  @Input() public pathRoute: string;

}
