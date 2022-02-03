import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxQuartersComponent } from './flux-quarters.component';

describe('FluxQuartersComponent', () => {
  let component: FluxQuartersComponent;
  let fixture: ComponentFixture<FluxQuartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxQuartersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
