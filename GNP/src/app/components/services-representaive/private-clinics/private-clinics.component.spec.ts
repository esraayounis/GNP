import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateClinicsComponent } from './private-clinics.component';

describe('PrivateClinicsComponent', () => {
  let component: PrivateClinicsComponent;
  let fixture: ComponentFixture<PrivateClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateClinicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
