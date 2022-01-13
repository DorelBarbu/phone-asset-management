import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPhoneDialogComponent } from 'src/app/edit-phone-dialog/edit-phone-dialog.component';
import { PhoneService } from 'src/app/services/phone.service';
import phones from 'src/mocks/phones';
import Phone from '../../../types/phone.type';
import { PhoneDataSource } from '../phone-datasource';
@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css'],
})
export class PhoneListContainerComponent {
  dataSource: PhoneDataSource = new PhoneDataSource();
  editPhoneDialogRef: MatDialogRef<EditPhoneDialogComponent, any>

  constructor(private phoneService: PhoneService, public dialog: MatDialog) {}

  openDialog(phone: Phone): void {
    this.editPhoneDialogRef = this.dialog.open(EditPhoneDialogComponent, {
      data: { ...phone },
    });

    this.editPhoneDialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed');
    })

    this.editPhoneDialogRef.componentInstance.onSaveEventEmitter.subscribe(data => {
      this.editPhoneDialogRef.componentInstance.isLoading = true;
      console.log('data arrived in parent component ', data);
    })
  }

  closeDialog() {
    this.editPhoneDialogRef.componentInstance.onSaveEventEmitter.unsubscribe();
    this.editPhoneDialogRef.close();
  }

  handleRowClickEvent(phone: Phone) {
    this.openDialog(phone);
  }
}
