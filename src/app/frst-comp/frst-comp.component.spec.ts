import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrstCompComponent } from './frst-comp.component';

describe('FrstCompComponent', () => {
  let component: FrstCompComponent;
  let fixture: ComponentFixture<FrstCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrstCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
