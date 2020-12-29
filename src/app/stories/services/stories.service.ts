import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient, private router: Router) { }
  public getStories(page, pageSize) {
    const path = `${BASE_URL}/story/${page}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }

  public getPagination() {
    const path = `${BASE_URL}/util/count`;
    return this.http
      .post(path, {collectionName: 'story', considerActive: false})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        console.log(errorRes);
        return throwError(errorRes.error.message);
      }));
  }
}
