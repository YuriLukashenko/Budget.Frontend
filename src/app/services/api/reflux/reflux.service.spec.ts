import { TestBed } from '@angular/core/testing';

import { RefluxService } from './reflux.service';

describe('RefluxService', () => {
  let service: RefluxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefluxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
