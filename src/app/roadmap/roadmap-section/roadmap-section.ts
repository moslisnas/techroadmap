import { Component, Input } from '@angular/core';
import { RoadmapElement } from '@app/roadmap/roadmap-element/roadmap-element';

@Component({
  selector: 'app-roadmap-section',
  imports: [RoadmapElement],
  templateUrl: './roadmap-section.html',
  styleUrl: './roadmap-section.css',
})
export class RoadmapSection {
  @Input() tech!: string;
  versions: string[] = ['v1.0', 'v2.0', 'v3.0']; // TODO Load versions dynamically
}
