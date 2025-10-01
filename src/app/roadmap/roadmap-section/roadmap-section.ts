import { Component, Input } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { RoadmapElement } from '@app/roadmap/roadmap-element/roadmap-element';
import { ApiService } from '@services/api/Api.service';
import { TechnologyService } from '@services/technology.service';
import { TechnologyStore } from '@app/stores/technology.store';

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

  constructor(private technologyStore: TechnologyStore, private apiService:ApiService, private tecnologyService:TechnologyService){}

  ngOnInit() {
    if (this.techString && this.techString.length > 2) {
      this.apiService.getTechnologies().subscribe({
        next: (technologiesData) => {
          const techsFiltered = Object.values(technologiesData).filter((tech: any) =>
            tech.name.toLowerCase().includes(this.techString.toLowerCase())
          );
          const techFiltered:any = techsFiltered[0];
          // Obtain technology with all data
          if(techFiltered && techFiltered.id){
            this.technologyStore.loadTechWithDependencies(techFiltered.id);
          }
        },
        error: (error) => {
          console.error('Error obtaining data: technologies', error);
        }
      });
    }
  }
}
