import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePhoneModule } from './create-phone/create-phone.module';
import { EditPhoneModule } from './edit-phone/edit-phone.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreatePhoneModule,
    EditPhoneModule,
  ]
})
export class PhoneModule { }
