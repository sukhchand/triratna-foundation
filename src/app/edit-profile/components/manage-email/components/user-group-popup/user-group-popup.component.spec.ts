import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupPopupComponent } from './user-group-popup.component';

describe('UserGroupPopupComponent', () => {
  let component: UserGroupPopupComponent;
  let fixture: ComponentFixture<UserGroupPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
