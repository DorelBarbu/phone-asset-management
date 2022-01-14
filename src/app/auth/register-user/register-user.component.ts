import { Component, OnInit } from '@angular/core';
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
    console.log(password, repeatPassword);
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
export class RegisterUserComponent implements OnInit {
  email = new FormControl('test@test.com', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('test', [Validators.required]);
  repeatPassword = new FormControl('test2', [
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

  private login() {
    console.log(this.authService.getToken());
    this.isLoading = true;
    // this.authService
    //   .login(this.email.value, this.password.value)
    //   .pipe(
    //     catchError((err) => {
    //       this.snackBar.open(err.message, 'Close', {
    //         duration: 1000,
    //       });
    //       return of(null);
    //     })
    //   )
    //   .subscribe(() => {
    //     console.log('here');
    //     this.isLoading = false;
    //     this.router.navigate(['/phones']);
    //   });
  }
  onSubmit() {
    console.log('submit form');
    // if (this.loginForm.valid) {
    //   this.login();
    // }
  }

  ngOnInit(): void {
    console.log(this.repeatPassword);
  }
}
