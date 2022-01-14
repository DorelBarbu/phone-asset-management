import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

function passwordNotMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.parent?.value.password;
    const repeatPassword = control.value;
    if (password == repeatPassword) {
      return null;
    }
    return {
      noMatch: 'Passwords are not the same',
    };
  };
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css', '../../../style.css'],
})
export class RegisterUserComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  repeatPassword = new FormControl('', [
    Validators.required,
    passwordNotMatch(),
  ]);

  isLoading: boolean = false;

  loginForm = this.formBuilder.group({
    username: this.email,
    password: this.password,
    repeatPassword: this.repeatPassword,
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getRepeatPasswordErrorMessage() {
    console.log(this.repeatPassword.hasError('required'));
    if (this.repeatPassword.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Paswords do not match';
  }

  getPasswordErrorMessage() {
    return 'Password is required';
  }

  private register() {
    this.isLoading = true;
    this.authService.register(this.email.value, this.password.value).subscribe(
      () => {
        this.router.navigate(['/login']);
        this.snackBar.open(
          'Congratulations, you can now log in with your username and password',
          'Close',
          {
            duration: 3000,
          }
        );
      },
      (err) => {
        this.snackBar.open(err.error.message, 'Close', {
          duration: 1000,
        });
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.register();
    }
  }
}
