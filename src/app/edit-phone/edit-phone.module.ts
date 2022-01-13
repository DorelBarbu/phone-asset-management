import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPhoneDialogComponent } from '../edit-phone-dialog/edit-phone-dialog.component';
import { EditPhoneFormComponent } from '../edit-phone-form/edit-phone-form.component';


import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    EditPhoneDialogComponent,
    EditPhoneFormComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ]
})
export class EditPhoneModule { }
