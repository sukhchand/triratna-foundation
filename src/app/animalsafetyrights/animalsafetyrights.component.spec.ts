import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsafetyrightsComponent } from './animalsafetyrights.component';

describe('AnimalsafetyrightsComponent', () => {
  let component: AnimalsafetyrightsComponent;
  let fixture: ComponentFixture<AnimalsafetyrightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsafetyrightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsafetyrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
