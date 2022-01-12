import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAvgRateComponent } from './salary-avg-rate.component';

describe('SalaryAvgRateComponent', () => {
  let component: SalaryAvgRateComponent;
  let fixture: ComponentFixture<SalaryAvgRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryAvgRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryAvgRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
