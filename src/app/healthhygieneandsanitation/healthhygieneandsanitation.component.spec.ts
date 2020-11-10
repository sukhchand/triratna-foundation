import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthhygieneandsanitationComponent } from './healthhygieneandsanitation.component';

describe('HealthhygieneandsanitationComponent', () => {
  let component: HealthhygieneandsanitationComponent;
  let fixture: ComponentFixture<HealthhygieneandsanitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthhygieneandsanitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthhygieneandsanitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
