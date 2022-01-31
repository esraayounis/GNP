import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCertificateComponent } from './health-certificate.component';

describe('HealthCertificateComponent', () => {
  let component: HealthCertificateComponent;
  let fixture: ComponentFixture<HealthCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
