import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonksandnunsComponent } from './monksandnuns.component';

describe('MonksandnunsComponent', () => {
  let component: MonksandnunsComponent;
  let fixture: ComponentFixture<MonksandnunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonksandnunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonksandnunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
