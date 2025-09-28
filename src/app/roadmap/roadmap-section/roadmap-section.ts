import { Component, Input } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { RoadmapElement } from '@app/roadmap/roadmap-element/roadmap-element';
import { ApiService } from '@services/api/Api.service';
import { TechnologyService } from '@services/technology.service';

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

  constructor(private apiService:ApiService, private tecnologyService:TechnologyService){}

  ngOnInit() {
    if (this.techString && this.techString.length > 2) {
      this.apiService.getTechnologies().subscribe({
        next: (technologiesData) => {
          const techsFiltered = Object.values(technologiesData).filter((tech: any) =>
            tech.name.toLowerCase().includes(this.techString.toLowerCase())
          );
          const techFiltered:any = techsFiltered[0];
          //Obtain technology with all data //TODO: Improve the way to transfer this data to child components
          if(techFiltered && techFiltered.id){
            this.apiService.getTechnologyByIdWithVersions(techFiltered.id).subscribe({
              next: (technologyData) => {
                this.tecnologyService.setTechnology(technologyData);
              },
              error: (error) => {
                console.error('Error obtaining data: technology', error);
              }
            });
          }
        },
        error: (error) => {
          console.error('Error obtaining data: technologies', error);
        }
      });
    }
  }
}
