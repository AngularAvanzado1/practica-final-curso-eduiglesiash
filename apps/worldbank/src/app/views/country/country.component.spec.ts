import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComponent } from './country.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataModule } from '@wb-data';
import { UiModule } from '@wb-ui';

describe('CountryComponent', () => {

  describe('The CountryComponents is compiled', () => {
    let fixture: ComponentFixture<CountryComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, DataModule, UiModule],
        declarations: [CountryComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CountryComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Should create the component', () => {
      const component = fixture.componentInstance;
      expect(component).toBeTruthy();
    });

    it('Should have a property "title" with value "Country: " ', ()=>{
      const component: CountryComponent = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Country: ');
    })

  });
});
