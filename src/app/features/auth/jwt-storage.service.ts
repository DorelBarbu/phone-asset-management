import { Injectable } from '@angular/core';
import { JwtStorage } from './types/JwtStorage';

const TOKEN_KEY = 'token';
const EXPIRES_AT_KEY = 'expiresAt';

@Injectable({
  providedIn: 'root',
})
export class JwtStorageService extends JwtStorage {
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  }
  public getExpiresAt(): Date {
    return new Date(localStorage.getItem(EXPIRES_AT_KEY) || '');
  }
  public setToken(token: string, expiresAt: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(EXPIRES_AT_KEY, expiresAt);
  }
}
