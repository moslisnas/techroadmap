import { Component } from '@angular/core';
import { Timeline } from '@app/roadmap/timeline/timeline';
import { TechnologyStore } from '@app/stores/technology.store';
import { RoadmapElementProperties } from '@app/roadmap/roadmap-element/roadmap-element.interface';

@Component({
  selector: 'app-roadmap-element',
  imports: [Timeline],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement implements RoadmapElementProperties {
  constructor(private technologyStore: TechnologyStore) {}

  get tech() {
    return this.technologyStore.tech();
  }
}
