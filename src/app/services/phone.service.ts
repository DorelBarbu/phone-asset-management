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

  getPhones(): Observable<Phone[]> {
    return this.phoneApi.getPhones();
  }

  updatePhone(phone: Phone): Observable<Phone> {
    return this.phoneApi.updatePhone(phone);
  }

  createPhone(phone: Phone): Observable<Phone> {
    return this.phoneApi.createPhone(phone);
  }
}
