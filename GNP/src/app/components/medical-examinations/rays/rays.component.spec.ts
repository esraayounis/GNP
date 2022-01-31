import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaysComponent } from './rays.component';

describe('RaysComponent', () => {
  let component: RaysComponent;
  let fixture: ComponentFixture<RaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
