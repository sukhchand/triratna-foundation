import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPDFViewerComponent } from './custom-pdf-viewer.component';

describe('CustomPDFViewerComponent', () => {
  let component: CustomPDFViewerComponent;
  let fixture: ComponentFixture<CustomPDFViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPDFViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPDFViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
