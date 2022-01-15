import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePhoneFormComponent } from './create-phone-form/create-phone-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



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
    FileUploadModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [
    CreatePhoneFormComponent
  ]
})
export class CreatePhoneModule { }
