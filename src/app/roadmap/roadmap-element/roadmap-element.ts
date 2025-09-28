import { Component } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { TechnologyService } from '@services/technology.service';
import { Timeline } from '@app/roadmap/timeline/timeline';

@Component({
  selector: 'app-roadmap-element',
  imports: [Timeline],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement {
  tech!: Technology;

  constructor(private tecnologyService: TechnologyService) {
    this.tech = this.tecnologyService.getTechnology()!;
  }
}
