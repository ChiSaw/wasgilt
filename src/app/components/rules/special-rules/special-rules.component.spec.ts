import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRulesComponent } from './special-rules.component';

describe('SpecialRulesComponent', () => {
  let component: SpecialRulesComponent;
  let fixture: ComponentFixture<SpecialRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
