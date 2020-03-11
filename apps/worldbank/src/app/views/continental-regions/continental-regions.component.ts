import { Component, OnInit } from '@angular/core';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-continental-region',
  templateUrl: './continental-regions.component.html',
  styleUrls: ['./continental-regions.component.css']
})
export class ContinentalRegionsComponent implements OnInit {

  public regions$: Observable<Region[]>;
  public title = 'Continental Regions';

  constructor(
    private wbService: WorldbankService,
  ) {
  }

  ngOnInit() {
    this.regions$ = this.wbService.getRegions();
  }

}
