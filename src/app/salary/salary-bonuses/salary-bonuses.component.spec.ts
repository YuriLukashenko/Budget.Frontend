import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBonusesComponent } from './salary-bonuses.component';

describe('SalaryBonusesComponent', () => {
  let component: SalaryBonusesComponent;
  let fixture: ComponentFixture<SalaryBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBonusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
