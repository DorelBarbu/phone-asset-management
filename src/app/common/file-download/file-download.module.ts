import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDownloadComponent } from './file-download.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FileDownloadComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    FileDownloadComponent
  ]
})
export class FileDownloadModule { }
