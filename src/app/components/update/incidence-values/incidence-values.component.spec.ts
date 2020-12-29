import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceValuesComponent } from './incidence-values.component';

describe('IncidenceValuesComponent', () => {
  let component: IncidenceValuesComponent;
  let fixture: ComponentFixture<IncidenceValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenceValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
