import { Component } from '@angular/core';
import { TimelineTooltipProperties } from '@app/roadmap/timeline-tooltip/timeline-tooltip.interface';
import { NodeProperties } from '@models/Node.model';
import { PeriodProperties } from '@models/Period.model';
import { Technology } from '@models/Technology.model';

@Component({
  selector: 'app-timeline',
  template: '',
  standalone: false,
})
export class MockTimeline {}

export const mockElementRef = {
  setAttribute: jasmine.createSpy('setAttribute'),
};

export const mockNodeTooltipComponent: TimelineTooltipProperties = {
  type: 'node',
  tooltipTitle: 'Angular',
  tooltipDescription: 'Frontend framework',
  tooltipNote: 'Click for more information',
  visible: false,
  showTooltip: jasmine.createSpy('showTooltip'),
  hideTooltip: jasmine.createSpy('hideTooltip'),
};

export const mockPeriodTooltipComponent: TimelineTooltipProperties = {
  type: 'period',
  tooltipDescription: 'Q1 2025',
  visible: false,
  showTooltip: jasmine.createSpy('showTooltip'),
  hideTooltip: jasmine.createSpy('hideTooltip'),
};

export const mockNode: NodeProperties = {
  gridArea: '',
  text: 'Angular 20',
  size: '2.5rem',
  color: '#123456',
  textFontStyle: 'font-size: 5px; font-weight: bold',
  tooltipTitle: '',
  tooltipDescription: '',
  url: 'http://example.com',
};

export const mockPeriod: PeriodProperties = {
  gridArea: '',
  color: '#123456',
  periodWidth: '6.5rem',
  styleType: 'straight',
  direction: 'right',
  tooltipDescription: '2024 - 2025',
};
export const mockTech: Technology = { color_primary: '#123456' } as Technology;
