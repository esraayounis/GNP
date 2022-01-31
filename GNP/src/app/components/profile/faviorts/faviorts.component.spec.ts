import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviortsComponent } from './faviorts.component';

describe('FaviortsComponent', () => {
  let component: FaviortsComponent;
  let fixture: ComponentFixture<FaviortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaviortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
