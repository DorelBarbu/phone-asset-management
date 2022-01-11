import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';
import { PhoneListComponent } from '../phone-list/phone-list.component';



@NgModule({
  declarations: [
    PhoneListContainerComponent,
    PhoneListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhoneListContainerComponent
  ],
})
export class PhoneListContainerModule { }
