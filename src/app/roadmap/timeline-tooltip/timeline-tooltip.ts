import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-tooltip',
  imports: [],
  templateUrl: './timeline-tooltip.html',
  styleUrl: './timeline-tooltip.css',
})
export class TimelineTooltip {
  @Input() type: 'node' | 'period' = 'node';
  tooltipTitle: String = '';
  tooltipDescription: String = '';
  tooltipNote: String = '';
  tooltipPosition: number[] = [0, 0];

  showTooltip(element: any) {
    switch (this.type) {
      case 'node':
        this.tooltipTitle = element.nodeTooltipTitle;
        this.tooltipDescription = element.nodeTooltipDescription;
        this.tooltipNote = 'Click for more information';
        this.tooltipPosition = [element.positionTooltipNodeX, element.positionTooltipNodeY];
        break;
      case 'period':
        this.tooltipDescription = element.lineTooltipDescription;
        this.tooltipPosition = [element.positionTooltipPeriodX, element.positionTooltipPeriodY];
        break;
      default:
        break;
    }
  }
  hideTooltip() {
    this.tooltipTitle = '';
    this.tooltipDescription = '';
    this.tooltipNote = '';
    this.tooltipPosition = [0, 0];
  }
}
