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

  /*
   * Interaction methods and events
   */
  it('should show period tooltip', () => {
    // Arrange
    spyOn(component.periodTooltipComponent, 'showTooltip');
    // Act
    component.showPeriodTooltip(mockPeriod);
    // Asserts
    expect(component.tooltipVisible).toBeTrue();
    expect(component.periodTooltipComponent.showTooltip).toHaveBeenCalledWith(mockPeriod);
  });
  it('should hide version tooltip', () => {
    // Arrange
    spyOn(component.periodTooltipComponent, 'hideTooltip');
    // Act
    component.hidePeriodTooltip();
    // Asserts
    expect(component.tooltipVisible).toBeFalse();
    expect(component.periodTooltipComponent.hideTooltip).toHaveBeenCalled();
  });
});
