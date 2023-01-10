import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusPubLibComponent } from './bus-pub-lib.component';

describe('BusPubLibComponent', () => {
  let component: BusPubLibComponent;
  let fixture: ComponentFixture<BusPubLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusPubLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusPubLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
