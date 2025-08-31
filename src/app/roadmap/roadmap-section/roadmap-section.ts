import { Component, Input } from '@angular/core';
import { Technology } from '@app/models/Technology.model';
import { RoadmapElement } from '@app/roadmap/roadmap-element/roadmap-element';
import TechMockData from 'data/TechData';

@Component({
  selector: 'app-roadmap-section',
  imports: [RoadmapElement],
  templateUrl: './roadmap-section.html',
  styleUrl: './roadmap-section.css',
})
export class RoadmapSection {
  @Input() techString!: string;
  @Input() techActive!: boolean;
  techSelected!: Technology;
  versions!: string[];

  ngOnInit() {
    if (this.techString && this.techString.length > 2) {
      const techsFiltered: any[] = Object.values(TechMockData).filter((tech: any) =>
        tech.name.toLowerCase().includes(this.techString.toLowerCase())
      );
      this.techSelected = techsFiltered[0];
    }
  }
}
