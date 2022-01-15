import { Component, EventEmitter, Input, Output } from '@angular/core';
import Phone from '../../../../types/phone.type';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent {
  columns: string[] = ['id', 'type', 'serial', 'color'];

  @Input() phones: Phone[] | null = [];

  @Output() rowClickedEvent = new EventEmitter<Phone>();

  onClickRow(phone: Phone) {
    // console.log('row clicked', phone);
    this.rowClickedEvent.emit(phone);
  }
}
