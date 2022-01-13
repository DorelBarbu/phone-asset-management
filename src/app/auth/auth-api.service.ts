import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    });
  }
}
