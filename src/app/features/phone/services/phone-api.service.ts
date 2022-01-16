import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import phones from 'src/mocks/phones';
import Phone from '../../../../types/phone.type';
import { SERVER } from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class PhoneApiService {
  constructor(private http: HttpClient) {}

  public getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${SERVER}/phones`);
  }

  public updatePhone(id: string, phone: Partial<Phone>): Observable<Phone> {
    return this.http.patch<Phone>(`${SERVER}/phones/${id}`, phone);
  }

  public createPhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(`${SERVER}/phones`, phone);
  }

  // for the moment we use any here, since we do not want to do something specific with the
  // returned result
  public deletePhone(id: string) {
    return this.http.delete<any>(`${SERVER}/phones/${id}`);
  }
}
