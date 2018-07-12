import { TestBed, inject } from '@angular/core/testing';

import { ScrapeService } from './scrape.service';

describe('ScrapeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrapeService]
    });
  });

  it('should be created', inject([ScrapeService], (service: ScrapeService) => {
    expect(service).toBeTruthy();
  }));
});
