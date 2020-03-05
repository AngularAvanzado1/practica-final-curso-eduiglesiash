import { Component, OnInit } from '@angular/core';
import { Regions } from '@wb-domain';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'wb-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  public regions$: Observable<Regions[]>;

  constructor(
    private wbService: WorldbankService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.regions$ = this.wbService.getRegions()
  }

  public navigateTo(code: string){
    console.log(`Navigate TO: ${code}`);
    this.router.navigate(['/continental-region', code]);
  }
}
