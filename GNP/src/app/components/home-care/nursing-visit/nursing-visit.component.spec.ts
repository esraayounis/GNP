import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingVisitComponent } from './nursing-visit.component';

describe('NursingVisitComponent', () => {
  let component: NursingVisitComponent;
  let fixture: ComponentFixture<NursingVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursingVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursingVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
