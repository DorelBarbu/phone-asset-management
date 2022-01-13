import {
  Component,
  Inject,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Phone from 'src/types/phone.type';

@Component({
  selector: 'app-edit-phone-dialog',
  templateUrl: './edit-phone-dialog.component.html',
  styleUrls: ['./edit-phone-dialog.component.css'],
})
export class EditPhoneDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPhoneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public phone: Phone
  ) {}

  onSaveEventEmitter: EventEmitter<Phone> = new EventEmitter<Phone>();

  onSaveClick() {
    console.log('save phone clicked');
    this.onSaveEventEmitter.emit(this.phone);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
