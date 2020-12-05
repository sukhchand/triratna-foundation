import { BASE_URL } from './../../constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient, private router: Router) { }
  public getEvents(obj:any) {
    const path =`${BASE_URL}/event/get`;
    return this.http
      .post(path, obj)
      .pipe(map((response: any) => response));
      
  }
}
