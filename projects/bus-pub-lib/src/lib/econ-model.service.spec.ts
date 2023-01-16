import { TestBed } from '@angular/core/testing';

import { EconModelService } from './econ-model.service';

describe('EconLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EconModelService = TestBed.get(EconModelService);
    expect(service).toBeTruthy();
  });
});
