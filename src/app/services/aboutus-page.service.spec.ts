import { TestBed } from '@angular/core/testing';

import { AboutusPageService } from './aboutus-page.service';

describe('AboutusPageService', () => {
  let service: AboutusPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutusPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
