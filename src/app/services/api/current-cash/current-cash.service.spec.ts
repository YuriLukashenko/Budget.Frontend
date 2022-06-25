import { TestBed } from '@angular/core/testing';

import { CurrentCashService } from './current-cash.service';

describe('CurrentCashService', () => {
  let service: CurrentCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
