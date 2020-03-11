import { Component, OnInit, OnDestroy } from '@angular/core';
import { Region } from '@wb-domain';
import { WorldbankService } from '@wb-data';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'wb-regions',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit, OnDestroy {

  public title = 'Region';
  public idRegion: string;
  public dataCountries$: Observable<any>;
  public infoRegion: Region;
  public infoRegion$: any;

  constructor(
    private route: ActivatedRoute,
    private wbService: WorldbankService
  ) {
  }

  ngOnInit(): void {
    this.idRegion = this.route.snapshot.paramMap.get('id');
    this.infoRegion$ = this.wbService.getInfoRegion(this.idRegion)
      .subscribe((info: Region) => {
        this.infoRegion = info;
        this.dataCountries$ = this.wbService.getCountries(info.code);
      });
  }

  ngOnDestroy(){
    this.infoRegion$.unsubscribe();
  }
}
