import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { UiModule } from '@wb-ui';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegionsComponent', () => {
  describe('The RegionsComponent is compiled', () => {
    let fixture: ComponentFixture<RegionComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [UiModule, RouterTestingModule, HttpClientTestingModule],
        declarations: [RegionComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(RegionComponent);
      fixture.detectChanges();
    });

    it('Should create the component', () => {
      const component: RegionComponent = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });

    it('Should have a property "title" with value "shop"', ()=> {
      const component: RegionComponent = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Region');
    });

  });
});
