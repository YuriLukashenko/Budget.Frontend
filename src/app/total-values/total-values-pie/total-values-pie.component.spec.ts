import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValuesPieComponent } from './total-values-pie.component';

describe('TotalValuesPieComponent', () => {
  let component: TotalValuesPieComponent;
  let fixture: ComponentFixture<TotalValuesPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalValuesPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValuesPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
