import { async, TestBed } from '@angular/core/testing';
import { DataModule } from '@wb-data';

describe('DataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataModule).toBeDefined();
  });
});
