import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxAddComponent } from './flux-add.component';

describe('FluxAddComponent', () => {
  let component: FluxAddComponent;
  let fixture: ComponentFixture<FluxAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
