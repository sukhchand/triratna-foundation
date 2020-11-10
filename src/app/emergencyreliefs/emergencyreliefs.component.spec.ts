import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyreliefsComponent } from './emergencyreliefs.component';

describe('EmergencyreliefsComponent', () => {
  let component: EmergencyreliefsComponent;
  let fixture: ComponentFixture<EmergencyreliefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyreliefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyreliefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
