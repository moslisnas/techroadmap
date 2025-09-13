import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTooltip } from './timeline-tooltip';

describe('TimelineTooltip', () => {
  let component: TimelineTooltip;
  let fixture: ComponentFixture<TimelineTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineTooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineTooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
