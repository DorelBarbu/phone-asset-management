import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';
import { PhoneListComponent } from '../phone-list/phone-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ErrorMessageModule } from 'src/app/common/error-message/error-message.module';


@NgModule({
  declarations: [
    PhoneListContainerComponent,
    PhoneListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ErrorMessageModule,
  ],
  exports: [
    PhoneListContainerComponent
  ]
})
export class PhoneListContainerModule { }
