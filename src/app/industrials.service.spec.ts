import { TestBed } from '@angular/core/testing';

import { IndustrialsService } from './industrials.service';

describe('IndustrialsService', () => {
  let service: IndustrialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustrialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
