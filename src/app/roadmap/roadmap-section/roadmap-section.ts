import { Component, Input } from '@angular/core';
import { ApiService } from '@services/api/api.service';
import { TechnologyStore } from '@app/stores/technology.store';
import { RoadmapSectionProperties } from '@app/roadmap/roadmap-section/roadmap-section.interface';
import { RoadmapElement } from '@app/roadmap/roadmap-element/roadmap-element';
import { Technology } from '@models/Technology.model';

@Component({
  selector: 'app-roadmap-section',
  standalone: true,
  imports: [RoadmapElement],
  templateUrl: './roadmap-section.html',
  styleUrl: './roadmap-section.css',
})
export class RoadmapSection implements RoadmapSectionProperties {
  @Input() techString!: string;
  @Input() techActive!: boolean;

  constructor(private apiService: ApiService, private technologyStore: TechnologyStore) {}

  ngOnInit() {
    if (this.techString && this.techString.length > 2) {
      this.apiService.getTechnologies().subscribe({
        next: (technologiesData: Technology[]) => {
          const techsFiltered = Object.values(technologiesData).filter((tech: any) =>
            tech.name.toLowerCase().includes(this.techString.toLowerCase())
          );
          const techFiltered: any = techsFiltered[0];
          // Obtain technology with all data
          if (techFiltered && techFiltered.id) {
            this.technologyStore.loadTechWithDependencies(techFiltered.id);
          }
        },
        error: (error: unknown) => {
          console.error('Error obtaining data: technologies', error);
        },
      });
    }
  }
}
