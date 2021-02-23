import { EventsService } from './services/events.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  eventResult:any;
  myDate: Date;
  obj: any;
  
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public EventsService: EventsService,
  ) {}

  ngOnInit(): void {
    this.obj={
      startTime: new Date()
    }
    this.getEvents();
  }
  
  public getEvents() {
    this.EventsService.getEvents(this.obj).subscribe(result => {
      this.eventResult=result;
      console.log(this.eventResult)
    }, (error) => {
      console.log(error);
    })
  }
}
