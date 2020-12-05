import { BASE_URL } from './../../constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) { }

  public login(credentials:any) {
    const path = `${BASE_URL}/login`;
    return this.http.post(path, credentials).pipe(
      catchError((errorRes) => {
        return throwError(errorRes.message);
      }),
      tap((resData: any) => {
        this.user.next(resData);
        localStorage.setItem('userData', JSON.stringify(resData));
      })
    );
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    if (userData.token) {
      this.user.next(userData);
    }
  }

  getToken() {
    return localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData')).token
      : '';
  }

  public getUserById(userId:string) {
    const path =`${BASE_URL}/user/${userId}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }

  public signup(credentials:any) {
    credentials.roles = [];
    const path =`${BASE_URL}/user/credential`;
    return this.http
      .post(path, credentials)
      .pipe(map((response: any) => response));
  }

  public updateUser(userDetails:any) {
    const path =`${BASE_URL}/user`;
    return this.http
      .put(path, userDetails)
      .pipe(map((response: any) => response));
  }

  public updateCredentialForUser(credentialDetails:any) {
    credentialDetails.roles = [];
    const path =`${BASE_URL}/user/credential`;
    return this.http
      .put(path, credentialDetails)
      .pipe(map((response: any) => response));
  }

  public signOut() {
    localStorage.removeItem('userData');
    return true;
  }
}
