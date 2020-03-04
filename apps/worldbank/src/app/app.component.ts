import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldbankService } from '@wb-data';

import { Region } from '@wb-domain';


@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'World Bank Application';

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
