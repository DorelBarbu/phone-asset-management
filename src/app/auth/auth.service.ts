import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.apiService.login(username, password);
  }
}
