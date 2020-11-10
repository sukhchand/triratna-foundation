import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgivenessandreconciliationComponent } from './forgivenessandreconciliation.component';

describe('ForgivenessandreconciliationComponent', () => {
  let component: ForgivenessandreconciliationComponent;
  let fixture: ComponentFixture<ForgivenessandreconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgivenessandreconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgivenessandreconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
