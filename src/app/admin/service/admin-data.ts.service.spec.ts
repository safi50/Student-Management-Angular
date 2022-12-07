import { TestBed } from '@angular/core/testing';

import { AdminData } from './admin-data.ts.service';

describe('AdminDataTsService', () => {
  let service: AdminData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
