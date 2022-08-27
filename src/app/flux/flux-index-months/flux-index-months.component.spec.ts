import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxIndexMonthsComponent } from './flux-index-months.component';

describe('FluxIndexMonthsComponent', () => {
  let component: FluxIndexMonthsComponent;
  let fixture: ComponentFixture<FluxIndexMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxIndexMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxIndexMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
