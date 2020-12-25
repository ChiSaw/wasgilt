import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedStoresComponent } from './closed-stores.component';

describe('ClosedStoresComponent', () => {
  let component: ClosedStoresComponent;
  let fixture: ComponentFixture<ClosedStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
