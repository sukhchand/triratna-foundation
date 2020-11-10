import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehearsalofpanchasilaComponent } from './rehearsalofpanchasila.component';

describe('RehearsalofpanchasilaComponent', () => {
  let component: RehearsalofpanchasilaComponent;
  let fixture: ComponentFixture<RehearsalofpanchasilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehearsalofpanchasilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehearsalofpanchasilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
