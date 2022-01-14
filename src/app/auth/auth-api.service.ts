import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { AuthenticatedUser } from 'src/types/user.type';
@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  public login(
    username: string,
    password: string
  ): Observable<AuthenticatedUser> {
    return of({
      username: username,
      token: '123',
      expiresAt: '13-01-2022',
    }).pipe(
      delay(1000),
      switchMap((value) => {
        // return throwError(new Error('Invalid credentials'));
        return of(value);
      })
    );
  }

  public register(
    username: string,
    password: string
  ): Observable<AuthenticatedUser> {
    return of({
      username: username,
      token: '123',
      expiresAt: '13-01-2022',
    }).pipe(
      delay(1000),
      switchMap((value) => {
        // return throwError(new Error('Invalid credentials'));
        return of(value);
      })
    );
  }
}
