import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDeltaMonthsComponent } from './salary-delta-months.component';

describe('SalaryDeltaMonthsComponent', () => {
  let component: SalaryDeltaMonthsComponent;
  let fixture: ComponentFixture<SalaryDeltaMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDeltaMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryDeltaMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
