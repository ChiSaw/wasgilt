import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsRuleComponent } from './sports-rule.component';

describe('SportsRuleComponent', () => {
  let component: SportsRuleComponent;
  let fixture: ComponentFixture<SportsRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
