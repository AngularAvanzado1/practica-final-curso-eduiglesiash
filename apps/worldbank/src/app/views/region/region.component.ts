import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country, Region } from '@wb-domain';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InfoWorldBankService } from '../../store/info-world-bank/info-world-bank.service';


@Component({
  selector: 'wb-regions',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit, OnDestroy {

  public title = 'Region: ';
  public idRegion: string;
  public dataCountries$: Observable<Country[]>;
  public infoRegion: Region;
  public infoRegion$: any;

  constructor(
    private route: ActivatedRoute,
    private wbService: InfoWorldBankService
  ) {
  }

  ngOnInit(): void {
    this.idRegion = this.route.snapshot.paramMap.get('id');
    // this.wbService.loadListCountries(this.idRegion);
    this.infoRegion$ = this.wbService.getInfoRegion(this.idRegion)
      .subscribe(data => {
        this.infoRegion = data;
        this.wbService.loadListCountries(data.code, this.idRegion);
      });
    this.dataCountries$ = this.wbService.getCountries();
  }

  ngOnDestroy() {
    this.infoRegion$.unsubscribe();
  }

}
