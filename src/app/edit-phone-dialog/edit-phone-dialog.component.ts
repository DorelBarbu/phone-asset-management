import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Phone from 'src/types/phone';

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

  handleSaveButtonClick() {
    console.log('parent savePhone');
    console.log(this.phone);
  }

  handleCancelButtonClick() {
    console.log('cancel button clicked');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
