import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(public loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.headers.has('Content-Type'));
    req = req.clone({
      setHeaders: {
        'Content-Type' : req.headers.has('Content-Type')? null: 'application/json; charset=utf-8',
        'Accept'       : req.headers.has('Content-Type')? 'multipart/form-data': 'application/json',
        'Authorization': `${this.loginService.getToken()}`,
      },
    });
    return next.handle(req);
  }
}
