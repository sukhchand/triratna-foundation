import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class ManageEmailService {

  constructor(private http: HttpClient) { }

  public getUniqueDLNames(userID) {
    const path = `${BASE_URL}/email/unique_dl_names/${userID}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public createDL(groupName) {
    const path = `${BASE_URL}/email/create_dl`;
    return this.http
      .post(path, groupName)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public getEmailListFromDL(dlName) {
    const path = `${BASE_URL}/email/get_mails/${dlName}/${JSON.parse(localStorage.getItem('userData')).user.id}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public addEmailToDL(emailList) {
    const path = `${BASE_URL}/email/addEmailToDL`;
    return this.http
      .put(path, emailList)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public removeEmailFromDL(id) {
    const path = `${BASE_URL}/email/remove_email/${id}`;
    return this.http
      .delete(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public deleteDL(name) {
    const path = `${BASE_URL}/email/delete_dl/${name}/${JSON.parse(localStorage.getItem('userData')).user.id}`;
    return this.http
      .delete(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }
}
