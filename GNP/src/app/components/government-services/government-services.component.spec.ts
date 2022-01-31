import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentServicesComponent } from './government-services.component';

describe('GovernmentServicesComponent', () => {
  let component: GovernmentServicesComponent;
  let fixture: ComponentFixture<GovernmentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
