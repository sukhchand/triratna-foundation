import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellwishersComponent } from './wellwishers.component';

describe('WellwishersComponent', () => {
  let component: WellwishersComponent;
  let fixture: ComponentFixture<WellwishersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellwishersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellwishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
