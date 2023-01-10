import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconSliderComponent } from './econ-slider.component';

describe('EconSliderComponent', () => {
  let component: EconSliderComponent;
  let fixture: ComponentFixture<EconSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
