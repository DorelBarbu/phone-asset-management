import { Component, EventEmitter, Input, Output } from '@angular/core';
import Phone from '../../../../../types/phone.type';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent {
  columns: string[] = ['id', 'type', 'serial', 'color', 'metadata'];

  @Input() phones: Phone[] | null = [];

  @Output() onEditPhone = new EventEmitter<Phone>();

  @Output() onDeletePhone = new EventEmitter<Phone>();

  onEditAction(phone: Phone) {
    this.onEditPhone.emit(phone);
  }

  onDeleteAction(phone: Phone) {
    this.onDeletePhone.emit(phone);
  }
}
