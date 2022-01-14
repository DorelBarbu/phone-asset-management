import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthenticatedUser } from 'src/types/user.type';
import { AuthApiService } from './auth-api.service';
import { JwtStorage } from './types/JwtStorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storage: JwtStorage,
    private apiService: AuthApiService
  ) {}

  public login(
    username: string,
    password: string
  ): Observable<AuthenticatedUser> {
    const subject = new ReplaySubject<AuthenticatedUser>();

    this.apiService.login(username, password).subscribe(subject);

    subject.subscribe((authenticatedUser) => {
      this.setToken(authenticatedUser.token, authenticatedUser.expiresAt);
    });

    return subject.pipe(shareReplay());
  }

  public register(
    username: string,
    password: string
  ): Observable<AuthenticatedUser> {
    const subject = new ReplaySubject<AuthenticatedUser>();

    this.apiService.register(username, password).subscribe(subject);

    subject.subscribe((authenticatedUser) => {
      this.setToken(authenticatedUser.token, authenticatedUser.expiresAt);
    });

    return subject.pipe(shareReplay());
  }

  public getToken(): string {
    return this.storage.getToken();
  }

  public setToken(token: string, expiresAt: string) {
    this.storage.setToken(token, expiresAt);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
