// import { CalendarFormatter } from './calendar.provider';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarService } from './services/calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarResult:any;
  myDate: Date;
  obj: any;
  constructor(public calendarService:CalendarService) { }
  ngOnInit(): void {
    this.obj={
      startTime: new Date()
    }
    this.getEvents();
  }

  public getEvents() {
    this.calendarService.getEvents(this.obj).subscribe(result => {
      this.calendarResult=result;
    }, (error) => {
      console.log(error);
    })
  }


}
