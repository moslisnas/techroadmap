import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockNodeTooltipComponent } from '@mock/components/timeline.mocks';
import { mockPeriodTooltipComponent } from '@mock/components/timeline.mocks';
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
  
  it('should show tooltip for node type', () => {
    // Arrange
    component.type = 'node';
    // Act
    component.showTooltip(mockNodeTooltipComponent);
    // Assert
    expect(component.tooltipTitle).toBe('Angular');
    expect(component.tooltipDescription).toBe('Frontend framework');
    expect(component.tooltipNote).toBe('Click for more information');
    expect(component.tooltipPosition).toEqual([100, 200]);
  });
  it('should show tooltip for period type', () => {
    // Arrange
    component.type = 'period';
    // Act
    component.showTooltip(mockPeriodTooltipComponent);
    // Assert
    expect(component.tooltipTitle).toBe('');
    expect(component.tooltipDescription).toBe('Q1 2025');
    expect(component.tooltipNote).toBe('');
    expect(component.tooltipPosition).toEqual([50, 75]);
  });
  it('should hide tooltip', () => {
    // Arrange
    component.tooltipTitle = 'Angular';
    component.tooltipDescription = 'Frontend framework';
    component.tooltipNote = 'Click for more information';
    component.tooltipPosition = [100, 200];
    // Act
    component.hideTooltip();
    // Assert
    expect(component.tooltipTitle).toBe('');
    expect(component.tooltipDescription).toBe('');
    expect(component.tooltipNote).toBe('');
    expect(component.tooltipPosition).toEqual([0, 0]);
  });
});
