import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStoryDetailsComponent } from './full-story-details.component';

describe('FullStoryDetailsComponent', () => {
  let component: FullStoryDetailsComponent;
  let fixture: ComponentFixture<FullStoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullStoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
