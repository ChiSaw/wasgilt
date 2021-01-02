import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantAnnouncementComponent } from './important-announcement.component';

describe('ImportantAnnouncementComponent', () => {
  let component: ImportantAnnouncementComponent;
  let fixture: ComponentFixture<ImportantAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
