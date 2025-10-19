import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-period',
  imports: [],
  templateUrl: './timeline-period.html',
  styleUrl: './timeline-period.css'
})
export class TimelinePeriod {
  @Input() period: any;
}
