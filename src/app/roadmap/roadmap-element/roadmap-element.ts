import { Component, Input } from '@angular/core';
import { Technology } from '@app/models/Technology.model';

@Component({
  selector: 'app-roadmap-element',
  imports: [],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement {
  @Input() tech!: Technology;
}
