import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PhoneService } from 'src/app/services/phone.service';
import Phone from 'src/types/phone.type';

@Component({
  selector: 'app-create-phone-form',
  templateUrl: './create-phone-form.component.html',
  styleUrls: ['./create-phone-form.component.css', './../../../../style.css'],
})
export class CreatePhoneFormComponent implements OnInit {
  public isLoading: boolean = false;

  type = new FormControl('', [Validators.required]);
  color = new FormControl('', [Validators.required]);
  serial = new FormControl('', [Validators.required]);

  fileBase64: string;

  createPhoneForm = this.formBuilder.group({
    type: this.type,
    color: this.color,
    serial: this.serial,
  });

  constructor(
    private snackBar: MatSnackBar,
    private phoneService: PhoneService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onReadFile(file: string | null) {
    this.fileBase64 = file ?? '';
  }

  private savePhone(phone: Phone) {
    this.isLoading = true;
    this.phoneService
      .createPhone(phone)
      .pipe(
        catchError((err) => {
          this.snackBar.open(err.message, 'Close', {
            duration: 1000,
          });
          return of(null);
        })
      )
      .subscribe((result: Phone | null) => {
        console.log('phone saved successfully');
        this.isLoading = false;
        if (result) {
          this.router.navigate(['/phones']);
        }
      });
  }

  onSave() {
    console.log('submit form');
    if (this.createPhoneForm.valid) {
      const phone: Phone = {
        ...this.createPhoneForm.value,
        metadata: this.fileBase64,
      };
      this.savePhone(phone);
    }
  }
}
