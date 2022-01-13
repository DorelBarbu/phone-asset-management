import {
  Component,
  Inject,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Phone from 'src/types/phone.type';
import { EditPhoneFormComponent } from '../edit-phone-form/edit-phone-form.component';

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

  @ViewChild(EditPhoneFormComponent) editPhoneForm: EditPhoneFormComponent;

  onSaveEventEmitter: EventEmitter<Phone> = new EventEmitter<Phone>();

  isLoading: boolean = false;

  onSaveClick() {
    this.onSaveEventEmitter.emit(this.editPhoneForm.phone);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
