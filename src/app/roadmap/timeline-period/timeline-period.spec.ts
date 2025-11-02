import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockPeriod } from '@mock/components/timeline.mocks';
import { TimelinePeriod } from './timeline-period';

describe('TimelinePeriod', () => {
  let component: TimelinePeriod;
  let fixture: ComponentFixture<TimelinePeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePeriod],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelinePeriod);
    component = fixture.componentInstance;
    component.period = mockPeriod;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
