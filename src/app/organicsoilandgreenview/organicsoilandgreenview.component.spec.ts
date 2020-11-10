import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicsoilandgreenviewComponent } from './organicsoilandgreenview.component';

describe('OrganicsoilandgreenviewComponent', () => {
  let component: OrganicsoilandgreenviewComponent;
  let fixture: ComponentFixture<OrganicsoilandgreenviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicsoilandgreenviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicsoilandgreenviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
