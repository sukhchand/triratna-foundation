import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchandinnovationComponent } from './researchandinnovation.component';

describe('ResearchandinnovationComponent', () => {
  let component: ResearchandinnovationComponent;
  let fixture: ComponentFixture<ResearchandinnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchandinnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchandinnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
