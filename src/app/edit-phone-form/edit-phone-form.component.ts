import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Phone from 'src/types/phone.type';

@Component({
  selector: 'app-edit-phone-form',
  templateUrl: './edit-phone-form.component.html',
  styleUrls: ['./edit-phone-form.component.css'],
})
export class EditPhoneFormComponent {
  @Input()
  phone: Phone = {
    id: 0,
    type: '',
    color: '',
    metadata: '',
    serial: '',
  };
  
  constructor() {}
}
