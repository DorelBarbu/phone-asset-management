import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input()
  whitelist: string;

  // If the file read was unsuccessful then we send null
  @Output()
  onReadFile = new EventEmitter<string | null>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        this.onReadFile.emit(event.target.result.toString());
      } else {
        this.onReadFile.emit(null);
      }
    };
    reader.onerror = () => this.onReadFile.emit(null);
  }
}
