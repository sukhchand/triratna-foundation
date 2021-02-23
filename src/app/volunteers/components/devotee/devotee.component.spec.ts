import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeComponent } from './devotee.component';

describe('DevoteeComponent', () => {
  let component: DevoteeComponent;
  let fixture: ComponentFixture<DevoteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
