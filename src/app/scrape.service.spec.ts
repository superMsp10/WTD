import { TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ScrapeService } from './scrape.service';

describe('ScrapeService', () => {
  let service2: ScrapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrapeService],
      imports: [FormsModule],
    });
    service2 = new ScrapeService();
  });

  // it('should be created', inject([ScrapeService], (service: ScrapeService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('#ScrapeURL should return Google value from observable',
  (done: DoneFn) => {
  service2.ScrapeURL("https://www.google.com/").subscribe(value => {
    expect(value).toBe('Google');
    done();
    
  });
  
});
});
