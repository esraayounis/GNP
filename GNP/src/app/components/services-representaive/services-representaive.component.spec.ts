import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRepresentaiveComponent } from './services-representaive.component';

describe('ServicesRepresentaiveComponent', () => {
  let component: ServicesRepresentaiveComponent;
  let fixture: ComponentFixture<ServicesRepresentaiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesRepresentaiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesRepresentaiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
