import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-tooltip',
  imports: [],
  templateUrl: './timeline-tooltip.html',
  styleUrl: './timeline-tooltip.css',
})
export class TimelineTooltip {
  @Input() type: 'node' | 'period' = 'node';
  tooltipTitle: String | null = null;
  tooltipDescription: String | null = null;
  tooltipNote: String | null = null;

  get visible(): boolean {
    return !!this.tooltipTitle || !!this.tooltipDescription || !!this.tooltipNote;
  }

  showTooltip(element: any) {
    switch (this.type) {
      case 'node':
        this.tooltipTitle = element.nodeTooltipTitle;
        this.tooltipDescription = element.nodeTooltipDescription;
        this.tooltipNote = 'Click for more information';
        break;
      case 'period':
        this.tooltipDescription = element.periodTooltipDescription;
        break;
    }
  }
  hideTooltip() {
    this.tooltipTitle = '';
    this.tooltipDescription = '';
    this.tooltipNote = '';
  }
}
