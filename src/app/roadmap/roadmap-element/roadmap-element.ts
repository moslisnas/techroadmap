import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roadmap-element',
  imports: [],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css'
})
export class RoadmapElement {
  @Input() techName!: string;
  @Input() techVersions!: string[];
}