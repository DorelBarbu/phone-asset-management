import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';
import { PhoneListComponent } from '../phone-list/phone-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhoneService } from '../services/phone.service';



@NgModule({
  declarations: [
    PhoneListContainerComponent,
    PhoneListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    PhoneListContainerComponent
  ]
})
export class PhoneListContainerModule { }
