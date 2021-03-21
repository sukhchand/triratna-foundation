import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaciltyRentalsComponent } from './facilty-rentals.component';

describe('FaciltyRentalsComponent', () => {
  let component: FaciltyRentalsComponent;
  let fixture: ComponentFixture<FaciltyRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaciltyRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaciltyRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
