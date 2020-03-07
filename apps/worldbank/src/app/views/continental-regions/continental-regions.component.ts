import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';
import { Region, Regions } from '@wb-domain';

@Component({
  selector: 'wb-continental-region',
  templateUrl: './continental-regions.component.html',
  styleUrls: ['./continental-regions.component.css']
})
export class ContinentalRegionsComponent implements OnInit {

  public regions$: Observable<Region[]>;

  constructor(
    private wbService: WorldbankService,
  ) {
  }

  ngOnInit() {
    this.regions$ = this.wbService.getRegions();
  }

}
