import { Component, EventEmitter, Input, Output } from '@angular/core';
import Phone from '../../types/phone';
import { PhoneDataSource } from '../phone-list-container/phone-datasource';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent {
  columns: string[] = ['id', 'type', 'serial', 'color'];

  @Input()
  dataSource: PhoneDataSource;

  @Output() rowClickedEvent = new EventEmitter<Phone>();

  onClickRow(phone: Phone) {
    this.rowClickedEvent.emit(phone);
  }
}
