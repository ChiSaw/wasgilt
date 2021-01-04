import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyRulesComponent } from './party-rules.component';

describe('PartyRulesComponent', () => {
  let component: PartyRulesComponent;
  let fixture: ComponentFixture<PartyRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
