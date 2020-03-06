import { Component, Input, OnInit } from '@angular/core';
import { Country } from '@wb-domain';

@Component({
  selector: 'wb-ui-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {

  @Input() public country: Country = {
    "id": "ALB",
    "iso2Code": "AL",
    "name": "Albania",
    "region": {
      "id": "ECS",
      "iso2code": "Z7",
      "value": "Europa y Asia central"
    },
    "adminregion": {
      "id": "ECA",
      "iso2code": "7E",
      "value": "Europa y Asia central (excluido altos ingresos)"
    },
    "incomeLevel": {
      "id": "UMC",
      "iso2code": "XT",
      "value": "Ingreso mediano alto"
    },
    "lendingType": {
      "id": "IBD",
      "iso2code": "XF",
      "value": "BIRF únicamente"
    },
    "capitalCity": "Tirana",
    "longitude": "19.8172",
    "latitude": "41.3317"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
