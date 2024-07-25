import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsDateSelectorComponent } from './bills-date-selector.component';

describe('BillsDateSelectorComponent', () => {
  let component: BillsDateSelectorComponent;
  let fixture: ComponentFixture<BillsDateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsDateSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
