import { Component, Input } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { Timeline } from '../timeline/timeline';

@Component({
  selector: 'app-roadmap-element',
  imports: [Timeline],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement {
  @Input() tech!: Technology;
}
