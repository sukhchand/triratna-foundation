import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavechildrenvulnerableandoldComponent } from './savechildrenvulnerableandold.component';

describe('SavechildrenvulnerableandoldComponent', () => {
  let component: SavechildrenvulnerableandoldComponent;
  let fixture: ComponentFixture<SavechildrenvulnerableandoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavechildrenvulnerableandoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavechildrenvulnerableandoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
