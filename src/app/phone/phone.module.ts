import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePhoneModule } from './create-phone/create-phone.module';
import { EditPhoneModule } from './edit-phone/edit-phone.module';
import { ViewPhoneModule } from './view-phone/view-phone.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreatePhoneModule,
    EditPhoneModule,
    ViewPhoneModule,
  ]
})
export class PhoneModule { }
