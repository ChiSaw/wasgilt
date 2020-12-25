import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingOutBanComponent } from './going-out-ban.component';

describe('GoingOutBanComponent', () => {
  let component: GoingOutBanComponent;
  let fixture: ComponentFixture<GoingOutBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoingOutBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingOutBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
