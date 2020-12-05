import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarFormatter {

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  month(event: CalendarEvent): string {
    return `<b>${formatDate(event.start, 'hh:mm a', this.locale)}</b> ${
      event.title
    }`;
  }
}
