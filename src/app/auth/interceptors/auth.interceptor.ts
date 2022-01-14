import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    const newReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });
    return next.handle(newReq);
  }
}
