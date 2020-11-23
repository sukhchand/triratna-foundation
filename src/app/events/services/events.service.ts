import { BASE_URL } from './../../constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private router: Router) { }
  public signup(credentials:any) {
    credentials.roles = [];
    const path =`${BASE_URL}/user/credential`;
    return this.http
      .post(path, credentials)
      .pipe(map((response: any) => response));
  }
}
