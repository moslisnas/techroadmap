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
  tooltipTitle: 'Angular',
  tooltipDescription: 'Frontend framework',
  tooltipNote: 'Click for more information',
  showTooltip: jasmine.createSpy('showTooltip'),
  hideTooltip: jasmine.createSpy('hideTooltip'),
};

export const mockPeriodTooltipComponent = {
  tooltipDescription: 'Q1 2025',
  showTooltip: jasmine.createSpy('showTooltip'),
  hideTooltip: jasmine.createSpy('hideTooltip'),
};

export const mockNode = {
  gridArea: '',
  text: 'Angular 20',
  size: '2.5rem',
  color: '#123456',
  textFontStyle: 'font-size: 5px; font-weight: bold',
  tooltipTitle: '',
  tooltipDescription: '',
  url: 'http://example.com',
};

export const mockPeriod = {
  gridArea: '',
  color: '#123456',
  periodWidth: '6.5rem',
  styleType: 'straight',
  direction: 'right',
  tooltipDescription: '2024 - 2025',
};
export const mockTech = { color_primary: '#123456' } as Technology;
