import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredBillsCurrentComponent } from './required-bills-current.component';

describe('RequiredBillsCurrentComponent', () => {
  let component: RequiredBillsCurrentComponent;
  let fixture: ComponentFixture<RequiredBillsCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredBillsCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredBillsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
