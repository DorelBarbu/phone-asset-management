import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';
import { PhoneListComponent } from '../phone-list/phone-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhoneService } from '../services/phone.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    PhoneListContainerComponent,
    PhoneListComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    PhoneListContainerComponent
  ]
})
export class PhoneListContainerModule { }
