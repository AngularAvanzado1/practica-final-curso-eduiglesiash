import { Component, OnInit } from '@angular/core';
import { Region } from '@wb-domain';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'wb-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

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
