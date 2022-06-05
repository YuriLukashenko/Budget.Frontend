import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefluxMonthComponent } from './reflux-month.component';

describe('RefluxMonthComponent', () => {
  let component: RefluxMonthComponent;
  let fixture: ComponentFixture<RefluxMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefluxMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefluxMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
