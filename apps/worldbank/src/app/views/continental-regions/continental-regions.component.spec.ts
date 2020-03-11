import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalRegionsComponent } from './continental-regions.component';
import { UiModule } from '@wb-ui';
import { DataModule } from '@wb-data';

describe('ContinentalRegionComponent', () => {

  describe('The Continental Region Component is compiled', () => {
    let fixture: ComponentFixture<ContinentalRegionsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [DataModule, UiModule],
        declarations: [ContinentalRegionsComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContinentalRegionsComponent);
      fixture.detectChanges();
    });

    it('Should create the component', () => {
      const component: ContinentalRegionsComponent = fixture.componentInstance;
      expect(component).toBeTruthy();
    });

    it('Should have a property "title" with value "Continental Regions"', ()=>{
      const component: ContinentalRegionsComponent = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Continental Regions');
    });

    it('Should have a property "regions$" is defined', ()=>{
      const component: ContinentalRegionsComponent = fixture.debugElement.componentInstance;
      expect(component.regions$).toBeDefined();
    })
  });
});
