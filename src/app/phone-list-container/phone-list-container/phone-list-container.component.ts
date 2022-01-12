import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPhoneDialogComponent } from 'src/app/edit-phone-dialog/edit-phone-dialog.component';
import { PhoneService } from 'src/app/services/phone.service';
import phones from 'src/mocks/phones';
import Phone from '../../../types/phone';
import { PhoneDataSource } from '../phone-datasource';
@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css'],
})
export class PhoneListContainerComponent {
  dataSource: PhoneDataSource = new PhoneDataSource();

  constructor(private phoneService: PhoneService, public dialog: MatDialog) {}

  openDialog(phone: Phone): void {
    const dialogRef = this.dialog.open(EditPhoneDialogComponent, {
      data: { ...phone },
    });
  }

  handleRowClickEvent(phone: Phone) {
    this.openDialog(phone);
  }
}
