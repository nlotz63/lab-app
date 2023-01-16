import { TestBed } from '@angular/core/testing';

import { EconMathService } from './econ-math.service';

describe('EconMathService', () => {
  let service: EconMathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EconMathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
