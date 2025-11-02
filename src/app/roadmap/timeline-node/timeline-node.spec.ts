import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockNode } from '@mock/components/timeline.mocks';
import { TimelineNode } from './timeline-node';

describe('TimelineNode', () => {
  let component: TimelineNode;
  let fixture: ComponentFixture<TimelineNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineNode],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineNode);
    component = fixture.componentInstance;
    component.node = mockNode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * Interaction methods and events
   */
  it('should open version URL', () => {
    // Arrange
    spyOn(window, 'open');
    // Act
    component.openVersionUrl(mockNode);
    // Asserts
    expect(window.open).toHaveBeenCalledWith('http://example.com', '_blank');
  });
  it('should show version tooltip', () => {
    // Arrange
    spyOn(component.nodeTooltipComponent, 'showTooltip');
    // Act
    component.showVersionTooltip(mockNode);
    // Asserts
    expect(component.tooltipVisible).toBeTrue();
    expect(component.nodeTooltipComponent.showTooltip).toHaveBeenCalledWith(mockNode);
    expect(component.isHovered).toBeTrue();
  });
  it('should hide version tooltip', () => {
    // Arrange
    spyOn(component.nodeTooltipComponent, 'hideTooltip');
    // Act
    component.hideVersionTooltip();
    // Asserts
    expect(component.tooltipVisible).toBeFalse();
    expect(component.nodeTooltipComponent.hideTooltip).toHaveBeenCalled();
    expect(component.isHovered).toBeFalse();
  });
});
