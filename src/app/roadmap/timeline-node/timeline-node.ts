import { Component, Input, ViewChild } from '@angular/core';
import { TimelineTooltip } from "../timeline-tooltip/timeline-tooltip";

@Component({
  selector: 'app-timeline-node',
  imports: [TimelineTooltip],
  templateUrl: './timeline-node.html',
  styleUrl: './timeline-node.css',
})
export class TimelineNode {
  @Input() node: any;
  @ViewChild('nodeTooltip', { static: false }) nodeTooltipComponent!: TimelineTooltip;

  tooltipVisible = false;
  isHovered = false;
  
  // Interaction methods and events
  showVersionTooltip(node: any) {
    this.tooltipVisible = true;
    this.nodeTooltipComponent?.showTooltip(node);
    this.isHovered = true; 
  }
  hideVersionTooltip() {
    this.tooltipVisible = false;
    this.nodeTooltipComponent?.hideTooltip();
    this.isHovered = false; 
  }
  openVersionUrl(node: any) {
    window.open(node.url, '_blank');
  }
}
