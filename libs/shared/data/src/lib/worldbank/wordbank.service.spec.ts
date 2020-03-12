import { TestBed } from '@angular/core/testing';

import { WorldbankService } from '@wb-data';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Country, Region } from '@wb-domain';
import { Observable } from 'rxjs';
import mock = jest.mock;

describe('WorldbankService', () => {
  describe('The WorldBankService is compiled', () => {
    let service: WorldbankService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      service = TestBed.inject(WorldbankService);
    });

    it('Should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Should return an observable when call getRegions()', () => {
      const regions$: Observable<Region[]> = service.getRegions();
      expect(regions$).toBeInstanceOf(Observable);
    });

    it('Should return Region[] when call getRegions()', () => {
      const mockService = [{
        id: '2',
        code: 'ECS',
        iso2code: 'Z7',
        name: 'Europa y Asia central'
      }, {
        id: '3',
        code: 'LCN',
        iso2code: 'ZJ',
        name: 'América Latina y el Caribe '
      }];

      service.getRegions()
        .subscribe(result => {
          console.log(result);
          expect(result).toEqual(mockService);
        });
      const httpMock = TestBed.inject(HttpTestingController);
      const req = httpMock.expectOne('http://api.worldbank.org/v2/es/region/?format=json');
      req.flush(mockService);
      httpMock.verify();
    });

    it('Should return an observable when call getInfoRegions()', () => {
      const id = '1';
      const region$: Observable<Region> = service.getInfoRegion(id);
      expect(region$).toBeInstanceOf(Observable);
    });

    it('Should return Region when call getRegions()', () => {
      const id = '2';
      const mockService = {
        id: '2',
        code: 'ECS',
        iso2code: 'Z7',
        name: 'Europa y Asia central'
      };
      service.getInfoRegion(id)
        .subscribe(result => {
          console.log(result);
          expect(result).toEqual(mockService);
        });
      const httpMock = TestBed.inject(HttpTestingController);
      const req = httpMock.expectOne('http://api.worldbank.org/v2/es/region/2/?format=json');
      req.flush(mockService);
      httpMock.verify();
    });

    it('Should return an observable when call getCountries()', () => {
      const id = 'EAS';
      const countries$: Observable<Country[]> = service.getCountries(id);
      expect(countries$).toBeInstanceOf(Observable);
    });

    it('Should return Country[] when call getRegions()', () => {
      const id = 'EAS';
      const mockService = [
        {
          id: 'ALB',
          iso2Code: 'AL',
          name: 'Albania',
          region: {
            id: 'ECS',
            iso2code: 'Z7',
            value: 'Europa y Asia central'
          },
          adminregion: {
            id: 'ECA',
            iso2code: '7E',
            value: 'Europa y Asia central (excluido altos ingresos)'
          },
          incomeLevel: {
            id: 'UMC',
            iso2code: 'XT',
            value: 'Ingreso mediano alto'
          },
          lendingType: {
            id: 'IBD',
            iso2code: 'XF',
            value: 'BIRF únicamente'
          },
          capitalCity: 'Tirana',
          longitude: '19.8172',
          latitude: '41.3317'
        },
        {
          id: 'AND',
          iso2Code: 'AD',
          name: 'Andorra',
          region: {
            id: 'ECS',
            iso2Code: 'Z7',
            value: 'Europa y Asia central'
          },
          adminregion: {
            id: '',
            iso2Code: '',
            value: ''
          },
          incomeLevel: {
            id: 'HIC',
            iso2Code: 'XD',
            value: 'Ingreso alto'
          },
          lendingType: {
            id: 'LNX',
            iso2Code: 'XX',
            value: 'No clasificado'
          },
          capitalCity: 'Andorra la Vieja',
          longitude: '1.5218',
          latitude: '42.5075'
        }
      ];
      service.getCountries(id)
        .subscribe(result => {
          console.log(result);
          expect(result).toEqual(mockService);
        });
      const httpMock = TestBed.inject(HttpTestingController);
      const req = httpMock.expectOne('http://api.worldbank.org/v2/es/region/EAS/country?per_page=1000&format=json');
      req.flush(mockService);
      httpMock.verify();
    });

    it('Should return an observable when call getInfoCountries()', () => {
      const id = 'ESP';
      const country$: Observable<Country> = service.getInfoCountry(id);
      expect(country$).toBeInstanceOf(Observable);
    });

    it('Should return Country when call getRegions()', () => {
      const id = 'EAS';
      const mockService = {
        id: 'EAS',
        iso2Code: 'Z4',
        name: 'Asia oriental y el Pacífico ',
        region: {
          id: 'NA',
          iso2Code: 'NA',
          value: 'Agregados'
        },
        adminregion: {
          id: '',
          iso2Code: '',
          value: ''
        },
        incomeLevel: {
          id: 'NA',
          iso2Code: 'NA',
          value: 'Agregados'
        },
        lendingType: {
          id: '',
          iso2Code: '',
          value: 'Agregados'
        },
        capitalCity: '',
        longitude: '',
        latitude: ''
      };
      service.getInfoCountry(id)
        .subscribe(result => {
          console.log(result);
          expect(result).toEqual(mockService);
        });
      const httpMock = TestBed.inject(HttpTestingController);
      const req = httpMock.expectOne('http://api.worldbank.org/v2/es/country/EAS/?format=json');
      req.flush(mockService);
      httpMock.verify();
    });

  });
});
