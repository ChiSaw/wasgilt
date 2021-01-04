import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRuleComponent } from './travel-rule.component';

describe('TravelRuleComponent', () => {
  let component: TravelRuleComponent;
  let fixture: ComponentFixture<TravelRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
