import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationandtrainingComponent } from './educationandtraining.component';

describe('EducationandtrainingComponent', () => {
  let component: EducationandtrainingComponent;
  let fixture: ComponentFixture<EducationandtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationandtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationandtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
