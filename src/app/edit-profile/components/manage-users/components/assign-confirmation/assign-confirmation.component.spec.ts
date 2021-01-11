import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignConfirmationComponent } from './assign-confirmation.component';

describe('AssignConfirmationComponent', () => {
  let component: AssignConfirmationComponent;
  let fixture: ComponentFixture<AssignConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
