import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingofbuddhaandspiritualityComponent } from './teachingofbuddhaandspirituality.component';

describe('TeachingofbuddhaandspiritualityComponent', () => {
  let component: TeachingofbuddhaandspiritualityComponent;
  let fixture: ComponentFixture<TeachingofbuddhaandspiritualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingofbuddhaandspiritualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingofbuddhaandspiritualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
