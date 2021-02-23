import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoragencyComponent } from './donoragency.component';

describe('DonoragencyComponent', () => {
  let component: DonoragencyComponent;
  let fixture: ComponentFixture<DonoragencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonoragencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoragencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
