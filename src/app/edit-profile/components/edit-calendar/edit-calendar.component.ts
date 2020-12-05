import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventTitleFormatter,
  CalendarView,
} from 'angular-calendar';
import { isSameDay, isSameMonth, setHours, setMinutes } from 'date-fns';
import { Observable, Subject } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';
import { EventPopupComponent } from './components/event-popup/event-popup.component';
import { CalendarFormatter } from './services/calendar-formatter.provider';
import { EditCalendarService } from './services/edit-calendar.service';

@Component({
  selector: 'app-edit-calendar',
  templateUrl: './edit-calendar.component.html',
  styleUrls: ['./edit-calendar.component.scss'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CalendarFormatter,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCalendarComponent implements OnInit {
  allEvents: CalendarEvent[] = [];
  events: CalendarEvent[];
  events$: Observable<CalendarEvent[]>;
  refresh: Subject<any> = new Subject();
  constructor(
    public editCalendarService: EditCalendarService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {
    this.getEvents();
  }
  x = false;

  locale: string = 'en';
  activeDayIsOpen: boolean = false;

  selectedDate: any;

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  ngOnInit(): void {
    this.getEvents();
    this.events = this.allEvents;
    this.refresh.next();
  }

  eventClicked(event: CalendarEvent<any>): void {
    debugger;
  }

  dayClicked({
    date,
    events,
  }: {
    date: Date;
    events: CalendarEvent<any>[];
  }): void {
    this.selectedDate = date;
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  // getEvents() {
  //   this.editCalendarService.getEvents().subscribe((results) => {
  //     results.response.forEach((event) => {
  //       this.events.push({
  //         title: event.eventName,
  //         start: new Date(event.eventDate),
  //         end: new Date(event.eventDate),
  //         actions: [
  //           {
  //             label: '<i class="fa fa-edit"></i>',
  //             onClick: ({ event }: { event: CalendarEvent }): void => {
  //               debugger;
  //               this.createEvent(this.selectedDate, event);
  //             },
  //           },
  //           {
  //             label: '<i class="fa fa-trash"></i>',
  //             onClick: ({ event }: { event: CalendarEvent }): void => {
  //               this.events = this.events.filter((iEvent) => iEvent !== event);
  //               console.log('Event deleted', event);
  //             },
  //           },
  //         ],
  //         meta: {
  //           event
  //         },
  //       });
  //     });
  //   });
  // }

  getEvents() {
    this.events$ = this.http
      .post(`${BASE_URL}/event/get`, { endTime: '2021-11-30' })
      .pipe(
        map((response: any) => {
          return response.response.map((event: any) => {
            return {
              title: event.eventName,
              start: new Date(event.eventDate),
              allDay: true,
              meta: {
                event,
              },
              actions: [
                {
                  label: `<div *ngIf=${this.x}><i class="fa fa-edit"></i></div>`,
                  onClick: ({ event }: { event: CalendarEvent }): void => {
                    this.createEvent(this.selectedDate, event);
                  },
                },
                {
                  label: '<i class="fa fa-trash"></i>',
                  onClick: ({ event }: { event: CalendarEvent }): void => {
                    this.events = this.events.filter(
                      (iEvent) => iEvent !== event
                    );
                    this.editCalendarService.deleteEvents(event.meta.event.id);
                  },
                },
              ],
            };
          });
        })
      );
  }

  deleteEvent(event) {
    debugger;
    this.editCalendarService.deleteEvents(event).subscribe(response => {
      debugger;
    })
  }

  createEvent(day, event?) {
    const eventModal = this.modalService.open(EventPopupComponent, {
      centered: true,
    });
    eventModal.componentInstance.data = {
      day,
      event,
    };
    eventModal.result.then((data) => {
      console.log(data);
    });
  }
}
