import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryWorkingHoursComponent } from './salary-working-hours.component';

describe('SalaryWorkingHoursComponent', () => {
  let component: SalaryWorkingHoursComponent;
  let fixture: ComponentFixture<SalaryWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryWorkingHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
