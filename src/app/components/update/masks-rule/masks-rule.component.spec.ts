import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasksRuleComponent } from './masks-rule.component';

describe('MasksRuleComponent', () => {
  let component: MasksRuleComponent;
  let fixture: ComponentFixture<MasksRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasksRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasksRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
