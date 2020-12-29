import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class EditNewsService {

  constructor(private http: HttpClient) { }

  public deleteNewsById(id:string) {
    const path = `${BASE_URL}/news/${id}`;
    const params = {id};
    return this.http
      .delete(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        console.log(errorRes);
        return throwError(errorRes.error.message);
      }));
  }

  public getNews(pageNumber, pageSize) {
    const path = `${BASE_URL}/news/${pageNumber}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }

  public createNews(data) {
    const path = `${BASE_URL}/news`;
    return this.http
      .post(path, data)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        console.log(errorRes);
        return throwError(errorRes.error.message);
      }));
  }

  public updateNews(data) {
    const path = `${BASE_URL}/news`;
    return this.http
      .put(path, data)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        console.log(errorRes);
        return throwError(errorRes.error.message);
      }));
  }

  public getNewsById(storyId) {
    const path = `${BASE_URL}/news/${storyId}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }

  public getPagination() {
    const path = `${BASE_URL}/util/count`;
    return this.http
      .post(path, {collectionName: 'news', considerActive: false})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        console.log(errorRes);
        return throwError(errorRes.error.message);
      }));
  }
}
