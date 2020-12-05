import { formatDate } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root',
})
export class EditCalendarService extends CalendarEventTitleFormatter {
  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public getEvents() {
    const path = `${BASE_URL}/event/get`;
    return this.http
      .post(path, { endTime: '2021-11-30' })
      .pipe(map((response: any) => response));
  }

  public createEvent(eventData) {
    const path = `${BASE_URL}/event`;
    return this.http
      .post(path, eventData)
      .pipe(map((response: any) => response));
  }

  public updateEvent(eventData: any) {
    const path = `${BASE_URL}/event`;
    return this.http
      .put(path, eventData)
      .pipe(map((response: any) => response));
  }
  public deleteEvents(id:string) {
    const path = `${BASE_URL}/event/delete`;
    const params = {id};
    return this.http
      .delete(path,{params})
      .pipe(map((response: any) => response));
  }
}
