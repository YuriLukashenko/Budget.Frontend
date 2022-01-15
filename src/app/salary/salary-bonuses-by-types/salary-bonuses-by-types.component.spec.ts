import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBonusesByTypesComponent } from './salary-bonuses-by-types.component';

describe('SalaryBonusesComponent', () => {
  let component: SalaryBonusesByTypesComponent;
  let fixture: ComponentFixture<SalaryBonusesByTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBonusesByTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryBonusesByTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
