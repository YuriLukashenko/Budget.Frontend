import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTotalByMonthsComponent } from './salary-total-by-months.component';

describe('SalaryTotalByMonthsComponent', () => {
  let component: SalaryTotalByMonthsComponent;
  let fixture: ComponentFixture<SalaryTotalByMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryTotalByMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryTotalByMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
