import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxDeltaQuartersComponent } from './flux-delta-quarters.component';

describe('FluxDeltaQuartersComponent', () => {
  let component: FluxDeltaQuartersComponent;
  let fixture: ComponentFixture<FluxDeltaQuartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxDeltaQuartersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxDeltaQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
