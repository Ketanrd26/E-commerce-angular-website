import { TestBed } from '@angular/core/testing';

import { BikesidebarService } from './bikesidebar.service';

describe('BikesidebarService', () => {
  let service: BikesidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikesidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
