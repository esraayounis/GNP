import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterVisitComponent } from './sitter-visit.component';

describe('SitterVisitComponent', () => {
  let component: SitterVisitComponent;
  let fixture: ComponentFixture<SitterVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitterVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
