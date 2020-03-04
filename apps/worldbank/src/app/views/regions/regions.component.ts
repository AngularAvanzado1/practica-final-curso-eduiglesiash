import { Component, OnInit, OnDestroy } from '@angular/core';
import { Region } from '@wb-domain';
import { WorldbankService } from '@wb-data';

@Component({
  selector: 'wb-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit, OnDestroy {

  public regions: Region[];
  private regions$;

  constructor(
    private wbService: WorldbankService
  ) {
  }

  ngOnInit() {
    this.regions$ = this.wbService.getRegions()
      .subscribe(response => this.regions = response[1]);
  }


  ngOnDestroy(){
    this.regions$.unsubscribe();
  }
}
