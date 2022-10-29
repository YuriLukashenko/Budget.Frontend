import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValuesStatisticComponent } from './total-values-statistic.component';

describe('TotalValuesStatisticComponent', () => {
  let component: TotalValuesStatisticComponent;
  let fixture: ComponentFixture<TotalValuesStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalValuesStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValuesStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
