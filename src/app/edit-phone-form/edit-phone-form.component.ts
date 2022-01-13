import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Phone from 'src/types/phone.type';

@Component({
  selector: 'app-edit-phone-form',
  templateUrl: './edit-phone-form.component.html',
  styleUrls: ['./edit-phone-form.component.css'],
})
export class EditPhoneFormComponent implements OnInit {
  @Input()
  phone: Phone;

  @Output()
  savePhoneEvent = new EventEmitter<Phone>();

  constructor() {}

  ngOnInit(): void {}

  handleClickSaveButton() {
    this.savePhoneEvent.emit(this.phone);
  }
}
