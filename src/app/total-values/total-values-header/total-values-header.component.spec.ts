import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValuesHeaderComponent } from './total-values-header.component';

describe('TotalValuesHeaderComponent', () => {
  let component: TotalValuesHeaderComponent;
  let fixture: ComponentFixture<TotalValuesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalValuesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValuesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
