import { TestBed } from '@angular/core/testing';

import { FopService } from './fop.service';

describe('FopService', () => {
  let service: FopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
