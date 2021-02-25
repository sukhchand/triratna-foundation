import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesandstandardComponent } from './policiesandstandard.component';

describe('PoliciesandstandardComponent', () => {
  let component: PoliciesandstandardComponent;
  let fixture: ComponentFixture<PoliciesandstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesandstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesandstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
