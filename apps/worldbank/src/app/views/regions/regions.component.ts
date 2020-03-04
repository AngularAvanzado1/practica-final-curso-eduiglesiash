import { Component, OnInit } from '@angular/core';
import { Regions } from '@wb-domain';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'wb-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  private regions$: Observable<Regions[]>;

  constructor(
    private wbService: WorldbankService
  ) {
  }

  ngOnInit() {
    this.regions$ = this.wbService.getRegions()
  }

}
