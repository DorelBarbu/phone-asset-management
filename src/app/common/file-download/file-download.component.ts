import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css'],
})
export class FileDownloadComponent implements OnInit {
  @Input()
  fileBase64: string;

  safeLink: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // We need to let the browser now that it is safe to download this link
    this.safeLink = this.domSanitizer.bypassSecurityTrustUrl(this.fileBase64);
  }
}
