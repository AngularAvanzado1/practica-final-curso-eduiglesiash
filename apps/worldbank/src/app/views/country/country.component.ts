import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldbankService } from '@wb-data';
import { Country } from '@wb-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'wb-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private idCountry: string;
  public country$: Observable<Country>;

  constructor(
    private route: ActivatedRoute,
    private wbService: WorldbankService
  ) { }

  ngOnInit(): void {
    this.idCountry = this.route.snapshot.paramMap.get('id');
    this.country$ = this.wbService.getInfoCountry(this.idCountry)
  }

}
