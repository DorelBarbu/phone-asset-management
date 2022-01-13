import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import phones from 'src/mocks/phones';
import Phone from 'src/types/phone.type';
import { PhoneApiService } from './phone-api.service';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private phoneApi: PhoneApiService) {}

  getPhones(pageNumber: number, pageSize: number): Observable<Phone[]> {
    return this.phoneApi.getPhones();
  }

  updatePhone(phone: Phone): Observable<Phone> {
    return this.phoneApi.updatePhone(phone);
  }

  createPhone(phone: Phone): Observable<Phone> {
    return this.phoneApi.createPhone(phone).pipe(
      delay(1000),
      switchMap((result) => {
        return throwError(new Error('Error saving phone to the database'));
        return of(result);
      })
    );
  }
}
