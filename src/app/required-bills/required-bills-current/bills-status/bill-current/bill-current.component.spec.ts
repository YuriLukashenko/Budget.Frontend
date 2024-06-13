import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCurrentComponent } from './bill-current.component';

describe('BillCurrentComponent', () => {
  let component: BillCurrentComponent;
  let fixture: ComponentFixture<BillCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
