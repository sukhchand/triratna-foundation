import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class EditStoriesService {

  constructor(private http: HttpClient, private router: Router) { }

  public createStory(data) {
    const path = `${BASE_URL}/story`;
    return this.http
      .post(path, data)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public getStoryById(storyId) {
    const path = `${BASE_URL}/story/${storyId}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public updateStory(data) {
    const path = `${BASE_URL}/story`;
    return this.http
      .put(path, data)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public getPagination() {
    const path = `${BASE_URL}/util/count`;
    return this.http
      .post(path, {collectionName: 'story', considerActive: false})
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public getStories(pageNumber, pageSize) {
    const path = `${BASE_URL}/story/${pageNumber}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }

  public deleteStoryById(id:string) {
    const path = `${BASE_URL}/story/${id}`;
    const params = {id};
    return this.http
      .delete(path)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.error.message);
      }));
  }
}
