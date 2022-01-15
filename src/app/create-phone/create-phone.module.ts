import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePhoneFormComponent } from './create-phone-form/create-phone-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FileUploadModule } from '../file-upload/file-upload.module';



@NgModule({
  declarations: [
    CreatePhoneFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FileUploadModule
  ]
})
export class CreatePhoneModule { }
