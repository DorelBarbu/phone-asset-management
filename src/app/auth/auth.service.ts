import { Injectable } from '@angular/core';
import { JwtStorage } from './types/JwtStorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: JwtStorage) {}
}
