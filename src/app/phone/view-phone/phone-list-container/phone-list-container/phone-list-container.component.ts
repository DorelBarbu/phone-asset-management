import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EditPhoneDialogComponent } from 'src/app/phone/edit-phone/edit-phone-dialog/edit-phone-dialog.component';
import { PhoneService } from 'src/app/phone/services/phone.service';
import Phone from '../../../../../types/phone.type';
@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css'],
})
export class PhoneListContainerComponent {
  editPhoneDialogRef: MatDialogRef<EditPhoneDialogComponent, any>;

  phones$: Observable<Phone[]>;
  errorMessage$: Subject<string> = new Subject<string>();

  constructor(
    private phoneService: PhoneService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.getPhones();
  }

  private getPhones() {
    this.errorMessage$.next('');

    this.phones$ = this.phoneService.getPhones().pipe(
      tap((phones) => {
        console.log('phones arrived', phones);
      }),
      catchError((errorObject) => {
        this.errorMessage$.next(errorObject.error.message);
        return of([]);
      })
    );
  }

  private savePhone(phone: Phone) {
    this.editPhoneDialogRef.componentInstance.isLoading = true;

    const updatePhoneResult$ = this.phoneService.updatePhone(
      phone.id.toString(),
      phone
    );
    updatePhoneResult$.subscribe(
      () => {
        this.closeDialog();
        this.getPhones();
      },
      (err) => {
        this.editPhoneDialogRef.componentInstance.isLoading = false;
        this.snackBar.open('Error updating phone', 'Close', {
          duration: 1000,
        });
      }
    );
  }

  openDialog(phone: Phone): void {
    this.editPhoneDialogRef = this.dialog.open(EditPhoneDialogComponent, {
      data: { ...phone },
    });

    this.editPhoneDialogRef.afterClosed().subscribe((result) => {
      console.log('This dialog was closed');
    });

    this.editPhoneDialogRef.componentInstance.onSaveEventEmitter.subscribe(
      this.savePhone.bind(this)
    );
  }

  closeDialog() {
    this.editPhoneDialogRef.componentInstance.onSaveEventEmitter.unsubscribe();
    this.editPhoneDialogRef.close();
  }

  handleRowClickEvent(phone: Phone) {
    this.openDialog(phone);
  }
}
