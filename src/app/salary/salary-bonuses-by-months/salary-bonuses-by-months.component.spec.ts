import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBonusesByMonthsComponent } from './salary-bonuses-by-months.component';

describe('SalaryBonusesByMonthComponent', () => {
  let component: SalaryBonusesByMonthsComponent;
  let fixture: ComponentFixture<SalaryBonusesByMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBonusesByMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryBonusesByMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
