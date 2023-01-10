import { TestBed } from '@angular/core/testing';

import { StuarrayService } from './stuarray.service';

describe('StuarrayService', () => {
  let service: StuarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
