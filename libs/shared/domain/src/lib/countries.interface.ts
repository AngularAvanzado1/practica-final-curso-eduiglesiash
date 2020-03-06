interface CountriesData {
  id: string;
  iso2code: string;
  value: string;
}

export interface Country {
  id: string;
  iso2Code: string;
  name: string;
  region: CountriesData;
  adminregion: CountriesData;
  incomeLevel: CountriesData;
  lendingType: CountriesData;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
