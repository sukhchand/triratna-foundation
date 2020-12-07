import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCalendarService } from '../../services/edit-calendar.service';

@Component({
  selector: 'app-event-popup',
  templateUrl: './event-popup.component.html',
  styleUrls: ['./event-popup.component.scss'],
})
export class EventPopupComponent implements OnInit {
  @Input() data: any = '';
  eventForm: FormGroup;
  eventData: any;
  error: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public editCalendarService: EditCalendarService
  ) {}

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      organizer: ['', Validators.required],
      contactInfo: ['', Validators.required],
      eventDate: [this.data.day, Validators.required],
    });
    this.eventData = this.data.event;
    if (this.eventData) {
      this.setEventForm();
    }
  }

  setEventForm() {
    this.eventForm.controls['eventName'].setValue(this.eventData.meta.event.eventName);
    this.eventForm.controls['description'].setValue(this.eventData.meta.event.description);
    this.eventForm.controls['location'].setValue(this.eventData.meta.event.location);
    this.eventForm.controls['organizer'].setValue(this.eventData.meta.event.organizer);
    this.eventForm.controls['contactInfo'].setValue(this.eventData.meta.event.contactInfo);
    this.eventForm.controls['eventDate'].setValue(new Date(this.eventData.meta.event.eventDate));
  }

  getFormattedDate() {
    return (
      this.data.day.getFullYear() +
      '-' +
      (this.data.day.getDate()<10? '0'+this.data.day.getDate() : this.data.day.getDate()) +
      '-' +
      this.data.day.getMonth()
    );
  }
  onSubmit() {
    if (this.data.event) {
      let eventData = this.eventForm.value;

      eventData['id'] = this.data.event.meta.event.id;
      this.editCalendarService.updateEvent(eventData).subscribe((results) => {
        this.close();
      }, error => {
        this.error = error;
      });
    } else {
      this.editCalendarService
        .createEvent(this.eventForm.value)
        .subscribe((results) => {
          this.close();
        }, error => {
          this.error = error;
        });
    }
  }

  close() {
    this.activeModal.close();
  }

  onlyNumberKey(event) {
    return event.charCode == 8 || event.charCode == 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }
}
