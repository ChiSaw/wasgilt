import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRukesComponent } from './special-rukes.component';

describe('SpecialRukesComponent', () => {
  let component: SpecialRukesComponent;
  let fixture: ComponentFixture<SpecialRukesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialRukesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRukesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
