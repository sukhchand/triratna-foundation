import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodclothsandshelterComponent } from './foodclothsandshelter.component';

describe('FoodclothsandshelterComponent', () => {
  let component: FoodclothsandshelterComponent;
  let fixture: ComponentFixture<FoodclothsandshelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodclothsandshelterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodclothsandshelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
