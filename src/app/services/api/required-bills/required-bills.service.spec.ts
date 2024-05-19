import { TestBed } from '@angular/core/testing';

import { RequiredBillsService } from './required-bills.service';

describe('RequiredBillsService', () => {
  let service: RequiredBillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequiredBillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
