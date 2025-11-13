import { Component } from '@angular/core';
import { TimelineNodeProperties } from '@app/roadmap/timeline-node/timeline-node.interface';
import { TimelinePeriodProperties } from '@app/roadmap/timeline-period/timeline-period.interface';
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
  lts: true,
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
export const mockNodes: NodeProperties[] = [
  {
    gridArea: '',
    text: 'Technology 6',
    size: '',
    color: '',
    textFontStyle: '',
    tooltipTitle: '',
    tooltipDescription: '',
    lts: false,
    url: 'http://example.com',
  },
  {
    gridArea: '',
    text: 'Technology 5',
    size: '',
    color: '',
    textFontStyle: '',
    tooltipTitle: '',
    tooltipDescription: '',
    lts: false,
    url: 'http://example.com',
  },
  {
    gridArea: '',
    text: 'Technology 4',
    size: '',
    color: '',
    textFontStyle: '',
    tooltipTitle: '',
    tooltipDescription: '',
    lts: false,
    url: 'http://example.com',
  },
  {
    gridArea: '',
    text: 'Technology 3',
    size: '',
    color: '',
    textFontStyle: '',
    tooltipTitle: '',
    tooltipDescription: '',
    lts: false,
    url: 'http://example.com',
  },
  {
    gridArea: '',
    text: 'Technology 2',
    size: '',
    color: '',
    textFontStyle: '',
    tooltipTitle: '',
    tooltipDescription: '',
    lts: false,
    url: 'http://example.com',
  },
  {
    gridArea: '',
    text: 'Technology 1',
    size: '',
    color: '',
    textFontStyle: '',
    tooltipTitle: '',
    tooltipDescription: '',
    lts: false,
    url: 'http://example.com',
  },
];
export const mockPeriods: PeriodProperties[] = [
  {
    gridArea: '',
    color: '',
    periodWidth: '',
    styleType: '',
    direction: '',
    tooltipDescription: '',
  },
  {
    gridArea: '',
    color: '',
    periodWidth: '',
    styleType: '',
    direction: '',
    tooltipDescription: '',
  },
  {
    gridArea: '',
    color: '',
    periodWidth: '',
    styleType: '',
    direction: '',
    tooltipDescription: '',
  },
  {
    gridArea: '',
    color: '',
    periodWidth: '',
    styleType: '',
    direction: '',
    tooltipDescription: '',
  },
  {
    gridArea: '',
    color: '',
    periodWidth: '',
    styleType: '',
    direction: '',
    tooltipDescription: '',
  },
];

export const mockTimelineNodeComponent: TimelineNodeProperties = {
  node: mockNode,
  tooltipVisible: false,
  isHovered: false,
  showVersionTooltip: jasmine.createSpy('showVersionTooltip'),
  hideVersionTooltip: jasmine.createSpy('hideVersionTooltip')
}
export const mockTimelinePeriodComponent: TimelinePeriodProperties = {
  period: mockPeriod,
  tooltipVisible: false,
  showPeriodTooltip: jasmine.createSpy('showPeriodTooltip'),
  hidePeriodTooltip: jasmine.createSpy('hidePeriodTooltip')
}

export const mockTech: Technology = { color_primary: '#123456' } as Technology;
