import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedInsitutionsComponent } from './closed-insitutions.component';

describe('ClosedInsitutionsComponent', () => {
  let component: ClosedInsitutionsComponent;
  let fixture: ComponentFixture<ClosedInsitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedInsitutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedInsitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
