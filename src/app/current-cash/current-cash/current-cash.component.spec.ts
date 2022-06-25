import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCashComponent } from './current-cash.component';

describe('CurrentCashComponent', () => {
  let component: CurrentCashComponent;
  let fixture: ComponentFixture<CurrentCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
