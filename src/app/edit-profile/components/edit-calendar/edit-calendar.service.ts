import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class EditCalendarService extends CalendarEventTitleFormatter {

  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
   }

   month(event: CalendarEvent): string {
    return `<b>${formatDate(event.start, 'hh:mm a', this.locale)}</b> ${
      event.title
    }`;
  }

}
