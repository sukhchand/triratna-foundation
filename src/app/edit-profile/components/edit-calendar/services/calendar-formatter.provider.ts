import { DOCUMENT, formatDate } from '@angular/common';
import { ElementRef, Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';
import { EventPopupComponent } from '../components/event-popup/event-popup.component';

@Injectable({
  providedIn: 'root',
})
export class CalendarFormatter {
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private elementRef: ElementRef,
    private modalService: NgbModal,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  month(event: CalendarEvent): string {
    if (new Date() <= new Date(event.start)) {
      setTimeout(this.addActionButton(event.start), 100000);
    }
    return `<b>${formatDate(event.start, 'hh:mm a', this.locale)}</b> ${
      event.title
    }`;
  }

  addActionButton(date): any {
    let eventSlider = this.elementRef.nativeElement.querySelector(
      '.cal-open-day-events'
    );
    let removeButton = this.elementRef.nativeElement.querySelector('.addEvent');
    if (removeButton) {
      removeButton.remove();
    }
    eventSlider.insertAdjacentHTML(
      'afterBegin',
      `<div class="createEventBtn"><button id="addEvent" class="addEvent btn btn-primary"> Create Event</button></div>`
    );
    let btn = document.getElementById('addEvent');
    if (btn) {
      btn.addEventListener('click', (e: Event) => this.createEvent(date));
    }
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
      if(data) {
        this.document.location.reload();
      }
    });
  }
}
