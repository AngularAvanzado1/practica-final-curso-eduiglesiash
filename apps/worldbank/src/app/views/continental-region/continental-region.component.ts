import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';
import { Region } from '@wb-domain';

@Component({
  selector: 'wb-continental-region',
  templateUrl: './continental-region.component.html',
  styleUrls: ['./continental-region.component.css']
})
export class ContinentalRegionComponent implements OnInit {

  public codeContinentalRegion: string;
  public dataCountries$: Observable<any>;
  public infoRegion$: Observable<Region>;
  constructor(
    private route: ActivatedRoute,
    private wbService: WorldbankService
  ) { }

  ngOnInit(): void {
    this.codeContinentalRegion = this.route.snapshot.paramMap.get('code');
    this.infoRegion$ = this.wbService.getInfoRegion(this.codeContinentalRegion);
    this.dataCountries$ = this.wbService.getCountries(this.codeContinentalRegion);
  }

  public countrySelected(event) {
    console.log({event});
  }
}
