import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedInstitutionsComponent } from './closed-institutions.component';

describe('ClosedInstitutionsComponent', () => {
  let component: ClosedInstitutionsComponent;
  let fixture: ComponentFixture<ClosedInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedInstitutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
