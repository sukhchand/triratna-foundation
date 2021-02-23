import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventTitleFormatter,
  CalendarView,
} from 'angular-calendar';
import { isSameDay, isSameMonth, setHours, setMinutes } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, subscribeOn } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
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
  encapsulation: ViewEncapsulation.None,
})
export class EditCalendarComponent implements OnInit {
  allEvents: CalendarEvent[] = [];
  events: CalendarEvent[];
  events$: Observable<CalendarEvent[]>;
  refresh: Subject<any> = new Subject();
  locale: string = 'en';
  activeDayIsOpen: boolean = false;
  selectedDate: any;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  constructor(
    public editCalendarService: EditCalendarService,
    private modalService: NgbModal,
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.getEvents();
    this.events = this.allEvents;
    this.refresh.next();
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
        events[0] = this.disableActions(date, events[0]);
        this.viewDate = date;
      }
    }
  }

  disableActions(date, events): any {
    if (new Date() > new Date(date)) {
      delete events.actions;
    }
    return events;
  }

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
                  label: `<i class="fa fa-edit"></i>`,
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
                    this.deleteEvent(event.meta.event.id);
                  },
                },
              ],
            };
          });
        }),
        catchError((errorRes) => {
          this.toastr.error(errorRes.error.message, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
          return throwError(errorRes.error.message);
        })
      );
  }

  deleteEvent(event) {
    const confirmationModal = this.modalService.open(
      ConfirmationPopupComponent
    );
    confirmationModal.result.then((data) => {
      if (data == 'success') {
        this.editCalendarService.deleteEvents(event).subscribe((response) => {
          this.toastr.success(response.message, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
          this.document.location.reload();
        },(error) => {
          this.toastr.error(error, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
        });
      }
    });
  }

  createEvent(day, event?) {
    this.activeDayIsOpen = false;
    const eventModal = this.modalService.open(EventPopupComponent);
    eventModal.componentInstance.data = {
      day,
      event,
    };
    eventModal.result.then((data) => {
      if (data) {
        this.document.location.reload();
      }
    });
  }
}
