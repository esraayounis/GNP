import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalIqamaComponent } from './renewal-iqama.component';

describe('RenewalIqamaComponent', () => {
  let component: RenewalIqamaComponent;
  let fixture: ComponentFixture<RenewalIqamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalIqamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalIqamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
