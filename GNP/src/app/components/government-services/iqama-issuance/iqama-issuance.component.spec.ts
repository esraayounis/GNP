import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqamaIssuanceComponent } from './iqama-issuance.component';

describe('IqamaIssuanceComponent', () => {
  let component: IqamaIssuanceComponent;
  let fixture: ComponentFixture<IqamaIssuanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IqamaIssuanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IqamaIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
