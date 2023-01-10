import { TestBed } from '@angular/core/testing';

import { BusPubLibService } from './bus-pub-lib.service';

describe('BusPubLibService', () => {
  let service: BusPubLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusPubLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
