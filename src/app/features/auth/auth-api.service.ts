import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { AuthenticatedUser } from 'src/types/user.type';
import { SERVER } from '../../constants';
@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<AuthenticatedUser> {
    return this.http.post<AuthenticatedUser>(`${SERVER}/users/signin`, {
      email,
      password,
    });
  }

  public register(
    email: string,
    password: string
  ): Observable<AuthenticatedUser> {
    return this.http.post<AuthenticatedUser>(`${SERVER}/users/signup`, {
      email,
      password,
    });
  }
}
