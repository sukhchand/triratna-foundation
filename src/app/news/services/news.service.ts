import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(page, pageSize) {
    const path = `${BASE_URL}/news/${page}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public getNewsById(newsId: string) {
    const path = `${BASE_URL}/news/${newsId}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public getPagination() {
    const path = `${BASE_URL}/util/count`;
    return this.http
      .post(path, {collectionName: 'news', considerActive: false})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }
}
