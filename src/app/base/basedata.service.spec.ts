import { TestBed } from '@angular/core/testing';

import { BasedataService } from './basedata.service';

describe('BasedataService', () => {
  let service: BasedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
