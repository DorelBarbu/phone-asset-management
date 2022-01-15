import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../../style.css'],
})
export class LoginPageComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [Validators.required]);

  isLoading: boolean = false;

  loginForm = this.formBuilder.group({
    username: this.email,
    password: this.password,
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

  getPasswordErrorMessage() {
    return 'Password is required';
  }

  private login() {
    console.log(this.authService.getToken());
    this.isLoading = true;
    this.authService
      .login(this.email.value, this.password.value)
      .pipe()
      .subscribe(
        () => {
          this.router.navigate(['/phones']);
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

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    console.log('submit form');
    if (this.loginForm.valid) {
      this.login();
    }
  }
}
