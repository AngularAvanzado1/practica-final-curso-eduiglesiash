import { TestBed } from '@angular/core/testing';

import { WorldbankService } from './worldbank.service';

describe('WordbankService', () => {
  let service: WorldbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
