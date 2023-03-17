import { TestBed } from '@angular/core/testing';

import { DisplaySideNavbarService } from './display-side-navbar.service';

describe('DisplaySideNavbarService', () => {
  let service: DisplaySideNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaySideNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
