import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyandprotectionComponent } from './safetyandprotection.component';

describe('SafetyandprotectionComponent', () => {
  let component: SafetyandprotectionComponent;
  let fixture: ComponentFixture<SafetyandprotectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyandprotectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyandprotectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
