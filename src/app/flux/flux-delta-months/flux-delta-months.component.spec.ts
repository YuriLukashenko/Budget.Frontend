import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxDeltaMonthsComponent } from './flux-delta-months.component';

describe('FluxDeltaMonthsComponent', () => {
  let component: FluxDeltaMonthsComponent;
  let fixture: ComponentFixture<FluxDeltaMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxDeltaMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxDeltaMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
