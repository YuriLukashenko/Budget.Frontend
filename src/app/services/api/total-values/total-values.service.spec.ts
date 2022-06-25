import { TestBed } from '@angular/core/testing';

import { TotalValuesService } from './total-values.service';

describe('TotalValuesService', () => {
  let service: TotalValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
