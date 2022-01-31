import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsultComponent } from './doctor-consult.component';

describe('DoctorConsultComponent', () => {
  let component: DoctorConsultComponent;
  let fixture: ComponentFixture<DoctorConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
