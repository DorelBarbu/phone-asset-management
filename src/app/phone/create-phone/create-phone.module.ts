import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePhoneFormComponent } from './create-phone-form/create-phone-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'src/app/common/file-upload/file-upload.module';
import { ErrorMessageModule } from 'src/app/common/error-message/error-message.module';


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
    ErrorMessageModule
  ],
  exports: [
    CreatePhoneFormComponent
  ]
})
export class CreatePhoneModule { }
