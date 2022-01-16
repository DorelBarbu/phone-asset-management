import { Component, EventEmitter, Input, Output } from '@angular/core';
import Phone from 'src/types/phone.type';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.css'],
})
export class ActionsMenuComponent {
  @Input()
  phone: Phone;
  constructor() {}

  @Output()
  onEditPhone = new EventEmitter<Phone>();

  @Output()
  onDeletePhone = new EventEmitter<Phone>();

  onEditClick() {
    this.onEditPhone.emit(this.phone);
  }

  onDeleteClick() {
    this.onDeletePhone.emit(this.phone);
  }
}
