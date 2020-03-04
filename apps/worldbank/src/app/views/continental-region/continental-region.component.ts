import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'wb-continental-region',
  templateUrl: './continental-region.component.html',
  styleUrls: ['./continental-region.component.css']
})
export class ContinentalRegionComponent implements OnInit {

  public codeContinentalRegion: string;
  public dataCountries$: Observable<any>
;  constructor(
    private route: ActivatedRoute,
    private wbService: WorldbankService
  ) { }

  ngOnInit(): void {
    this.codeContinentalRegion = this.route.snapshot.paramMap.get('code');
    this.dataCountries$ = this.wbService.getContinentalRegions(this.codeContinentalRegion)
  }
}
