import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxMonthComponent } from './flux-month.component';

describe('FluxMonthComponent', () => {
  let component: FluxMonthComponent;
  let fixture: ComponentFixture<FluxMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
