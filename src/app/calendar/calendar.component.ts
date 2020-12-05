import { CalendarFormatter } from './calendar.provider';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth, setHours, setMinutes } from 'date-fns';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CalendarFormatter
    }
  ]
})
export class CalendarComponent implements OnInit {
  calendarResult:any;
  myDate: Date;
  obj: any;
  constructor() { }

  ngOnInit(): void {
    this.obj={
      endTime: new Date()
    }
    this.getEvents();
  }
  
  public getEvents() {
    this.CalendarService.getEvents(this.obj).subscribe(result => {
      this.calendarResult=result;
    }, (error) => {
      console.log(error);
    })
  }

}
