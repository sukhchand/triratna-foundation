import { TestBed } from '@angular/core/testing';

import { CalendarFormatter } from './calendar.provider';

describe('CalendarService', () => {
  let service: CalendarFormatter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarFormatter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
