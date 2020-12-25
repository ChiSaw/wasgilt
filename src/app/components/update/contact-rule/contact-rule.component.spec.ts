import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRuleComponent } from './contact-rule.component';

describe('ContactRuleComponent', () => {
  let component: ContactRuleComponent;
  let fixture: ComponentFixture<ContactRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
