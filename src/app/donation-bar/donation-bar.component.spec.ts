import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationBarComponent } from './donation-bar.component';

describe('DonationBarComponent', () => {
  let component: DonationBarComponent;
  let fixture: ComponentFixture<DonationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
