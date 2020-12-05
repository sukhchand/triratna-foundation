// import { CalendarFormatter } from './calendar.provider';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


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
  constructor() { }
  ngOnInit(): void {
    this.obj={
      startTime: new Date()
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
