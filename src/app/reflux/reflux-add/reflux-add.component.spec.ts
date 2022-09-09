import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefluxAddComponent } from './reflux-add.component';

describe('RefluxAddComponent', () => {
  let component: RefluxAddComponent;
  let fixture: ComponentFixture<RefluxAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefluxAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefluxAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
