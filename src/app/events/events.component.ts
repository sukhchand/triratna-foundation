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

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public EventsService: EventsService
  ) {}

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.signup();
  }
  public signup() {
    this.EventsService.getEvents().subscribe(result => {
      debugger;
      // this.activeModal.close("signup");
    }, (error) => {
      console.log(error);
    })
  }
}
