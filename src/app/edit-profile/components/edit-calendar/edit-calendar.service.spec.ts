import { TestBed } from '@angular/core/testing';

import { EditCalendarService } from './edit-calendar.service';

describe('EditCalendarService', () => {
  let service: EditCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
