import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPhoneDialogComponent } from '../edit-phone-dialog/edit-phone-dialog.component';
import { EditPhoneFormComponent } from '../edit-phone-form/edit-phone-form.component';


import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreatePhoneComponent } from '../create-phone/create-phone.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';



@NgModule({
  declarations: [
    EditPhoneDialogComponent,
    EditPhoneFormComponent,
    CreatePhoneComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class EditPhoneModule { }
