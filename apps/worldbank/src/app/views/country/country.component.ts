import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '@wb-domain';
import { Observable } from 'rxjs';
import { InfoWorldBankService } from '../../store/info-world-bank/info-world-bank.service';

@Component({
  selector: 'wb-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, OnDestroy {

  public title = 'Country: ';
  private idCountry: string;
  public country$: Observable<Country>;
  public idRegion: string;
  public idRegion$: any;


  constructor(
    private route: ActivatedRoute,
    private wbService: InfoWorldBankService
  ) {
  }

  ngOnInit(): void {
    this.idCountry = this.route.snapshot.paramMap.get('id');
    this.country$ = this.wbService.getInfoCountry(this.idCountry);

    this.idRegion$ = this.wbService.getIdRegion()
      .subscribe(id => {
        this.idRegion = id;
      });
  }


  ngOnDestroy() {
    this.idRegion$.unsubscribe();
  }

}
