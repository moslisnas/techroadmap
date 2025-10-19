import { Component, Input } from '@angular/core';
import { TimelineNode } from "../timeline-node/timeline-node";
import { TimelinePeriod } from "../timeline-period/timeline-period";

@Component({
  selector: 'app-timeline-row',
  imports: [TimelineNode, TimelinePeriod],
  templateUrl: './timeline-row.html',
  styleUrl: './timeline-row.css',
})
export class TimelineRow {
  @Input() direction!: string;
  @Input() nodes!: any[];
  @Input() periods!: any[];
  @Input() periodBetweenRows: any | null;
}
