import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalComplexesComponent } from './medical-complexes.component';

describe('MedicalComplexesComponent', () => {
  let component: MedicalComplexesComponent;
  let fixture: ComponentFixture<MedicalComplexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalComplexesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalComplexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
