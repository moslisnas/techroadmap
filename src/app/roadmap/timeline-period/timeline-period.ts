import { Component, Input, ViewChild } from '@angular/core';
import { TimelineTooltip } from '@app/roadmap/timeline-tooltip/timeline-tooltip';
import { TimelinePeriodProperties } from '@app/roadmap/timeline-period/timeline-period.interface';

@Component({
  selector: 'app-timeline-period',
  standalone: true,
  imports: [TimelineTooltip],
  templateUrl: './timeline-period.html',
  styleUrl: './timeline-period.css',
})
export class TimelinePeriod implements TimelinePeriodProperties {
  @Input() period: any;
  @ViewChild('periodTooltip', { static: false }) periodTooltipComponent!: TimelineTooltip;

  tooltipVisible = false;

  // Interaction methods and events
  showPeriodTooltip(period: any) {
    this.tooltipVisible = true;
    this.periodTooltipComponent?.showTooltip(period);
  }
  hidePeriodTooltip() {
    this.tooltipVisible = false;
    this.periodTooltipComponent?.hideTooltip();
  }
}
