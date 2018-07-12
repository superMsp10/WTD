import { Component, OnInit } from '@angular/core';
import { ScrapeService } from '../scrape.service';

@Component({
  selector: 'app-manual-scrapper',
  templateUrl: './manual-scrapper.component.html',
  styleUrls: ['./manual-scrapper.component.css']
})

export class ManualScrapperComponent implements OnInit {

  constructor(private scrapeService: ScrapeService) { }

  response: string;
  url: string;


  ManualScrape(): void {
    this.scrapeService.ScrapeURL(this.url).subscribe(data => this.response = data.toString());
  }

  ngOnInit() {
  }

}
