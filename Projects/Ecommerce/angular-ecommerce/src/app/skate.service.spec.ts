import { TestBed } from '@angular/core/testing';

import { SkateService } from './skate.service';

describe('SkateService', () => {
  let service: SkateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
