import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureRulesComponent } from './culture-rules.component';

describe('CultureRulesComponent', () => {
  let component: CultureRulesComponent;
  let fixture: ComponentFixture<CultureRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
