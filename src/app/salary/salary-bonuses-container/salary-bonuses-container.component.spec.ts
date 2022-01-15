import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBonusesContainerComponent } from './salary-bonuses-container.component';

describe('SalaryBonusesContainerComponent', () => {
  let component: SalaryBonusesContainerComponent;
  let fixture: ComponentFixture<SalaryBonusesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBonusesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryBonusesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
