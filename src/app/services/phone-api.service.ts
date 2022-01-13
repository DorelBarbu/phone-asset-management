import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import phones from 'src/mocks/phones';
import Phone from '../../types/phone.type';

@Injectable({
  providedIn: 'root',
})
export class PhoneApiService {
  constructor() {}

  public getPhones(): Observable<Phone[]> {
    return of(phones).pipe(
      delay(500),
      switchMap((phones) => {
        // return throwError(new Error('Error loading phones'));
        return of(phones);
      })
    );
  }

  public updatePhone(phone: Phone): Observable<Phone> {
    return of(phone).pipe(
      delay(600),
      switchMap(() => {
        // return throwError(new Error('Error loading phones'));
        return of(phone);
      })
    );
  }
}
