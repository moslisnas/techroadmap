import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-node',
  imports: [],
  templateUrl: './timeline-node.html',
  styleUrl: './timeline-node.css'
})
export class TimelineNode {
  @Input() node: any;
}
