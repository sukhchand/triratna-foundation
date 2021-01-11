import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    const path = `${BASE_URL}/user`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public activeUser(userData:any, isActive:boolean) {
    const path = `${BASE_URL}/user/active/${userData.id}/${isActive}`;
    return this.http
      .put(path,{})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public roleProvider(providerId:string, userId:string, role:string) {
    const path = `${BASE_URL}/user/addrole/${providerId}/${userId}/${role}`;
    return this.http
      .put(path,{})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public removeRole(providerId:string, userId:string, role:string) {
    const path = `${BASE_URL}/user/removeRole/${providerId}/${userId}/${role}`;
    return this.http
      .put(path,{})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }
}
