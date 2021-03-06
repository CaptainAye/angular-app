import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.css']
})
export class IntelBrowserComponent implements OnInit {

  availableSources: string[] = ['http://www.esa.int/ESA', 'https://www.polsa.gov.pl/pl/'];
  selectedSource: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  selectSource(source: string) {
    this.selectedSource = this.sanitizer.bypassSecurityTrustResourceUrl(source);
  }

  ngOnInit() {
  }

}
