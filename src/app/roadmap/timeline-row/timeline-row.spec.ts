import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRow } from './timeline-row';

describe('TimelineRow', () => {
  let component: TimelineRow;
  let fixture: ComponentFixture<TimelineRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
