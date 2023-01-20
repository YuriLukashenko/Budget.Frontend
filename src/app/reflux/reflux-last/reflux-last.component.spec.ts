import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefluxLastComponent } from './reflux-last.component';

describe('RefluxLastComponent', () => {
  let component: RefluxLastComponent;
  let fixture: ComponentFixture<RefluxLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefluxLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefluxLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
