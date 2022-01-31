import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartExamsComponent } from './heart-exams.component';

describe('HeartExamsComponent', () => {
  let component: HeartExamsComponent;
  let fixture: ComponentFixture<HeartExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
