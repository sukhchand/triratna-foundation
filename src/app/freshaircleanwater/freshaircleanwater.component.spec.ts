import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshaircleanwaterComponent } from './freshaircleanwater.component';

describe('FreshaircleanwaterComponent', () => {
  let component: FreshaircleanwaterComponent;
  let fixture: ComponentFixture<FreshaircleanwaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshaircleanwaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshaircleanwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
