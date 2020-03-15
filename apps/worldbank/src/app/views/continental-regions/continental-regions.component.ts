import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '@wb-domain';
import { InfoWorldBankService } from '../../store/info-world-bank/info-world-bank.service';

@Component({
  selector: 'wb-continental-region',
  templateUrl: './continental-regions.component.html',
  styleUrls: ['./continental-regions.component.css']
})
export class ContinentalRegionsComponent implements OnInit {

  public regions$: Observable<Region[]>;
  public title = 'Continental Regions';

  constructor(
    private infoWBservice: InfoWorldBankService
  ) {
  }

  ngOnInit() {
    this.infoWBservice.loadRegions();
    this.regions$ = this.infoWBservice.getRegions();
  }
}
