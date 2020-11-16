import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(credentials:any) {
    const path = 'http://localhost:8080/login';
    return this.http.post(path, credentials,{
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
           'Access-Control-Allow-Origin': 'http://localhost:8080',
           'Access-Control-Allow-Credentials': 'true'
         })
    }).pipe(
      catchError((errorRes) => {
        return throwError(errorRes.message);
      }),
      tap((resData: any) => {
        console.log(resData);
      })
    );
  }
}
