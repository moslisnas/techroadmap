import { Component } from '@angular/core';
import { Timeline } from '@app/roadmap/timeline/timeline';
import { TechnologyStore } from '@app/stores/technology.store';

@Component({
  selector: 'app-roadmap-element',
  imports: [Timeline],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement {
  constructor(public technologyStore: TechnologyStore) {}
  
  get tech() {
    return this.technologyStore.tech();
  }
}
