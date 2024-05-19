import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsAddComponent } from './bills-add.component';

describe('BillsAddComponent', () => {
  let component: BillsAddComponent;
  let fixture: ComponentFixture<BillsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
