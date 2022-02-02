import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxYearsComponent } from './flux-years.component';

describe('FluxYearsComponent', () => {
  let component: FluxYearsComponent;
  let fixture: ComponentFixture<FluxYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
