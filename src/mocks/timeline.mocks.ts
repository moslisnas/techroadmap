import { Component } from '@angular/core';
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

export const mockNodeTooltipComponent = {
  nodeTooltipTitle: 'Angular',
  nodeTooltipDescription: 'Frontend framework',
  positionTooltipNodeX: 100,
  positionTooltipNodeY: 200,
  showTooltip: jasmine.createSpy('showTooltip'),
  hideTooltip: jasmine.createSpy('hideTooltip'),
};

export const mockPeriodTooltipComponent = {
  lineTooltipDescription: 'Q1 2025',
  positionTooltipPeriodX: 50,
  positionTooltipPeriodY: 75,
  showTooltip: jasmine.createSpy('showTooltip'),
  hideTooltip: jasmine.createSpy('hideTooltip'),
};

export const mockNode = { url: 'http://example.com' };
export const mockPeriod = { positionLineX1: 0, positionLineY1: 0, color_primary: '#123456' };
export const mockTech = { color_primary: '#123456' } as Technology;
