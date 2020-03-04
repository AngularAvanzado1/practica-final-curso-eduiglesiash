import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalRegionComponent } from './continental-region.component';

describe('ContinentalRegionComponent', () => {
  let component: ContinentalRegionComponent;
  let fixture: ComponentFixture<ContinentalRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentalRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentalRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
