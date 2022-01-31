import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLicenseComponent } from './traffic-license.component';

describe('TrafficLicenseComponent', () => {
  let component: TrafficLicenseComponent;
  let fixture: ComponentFixture<TrafficLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
