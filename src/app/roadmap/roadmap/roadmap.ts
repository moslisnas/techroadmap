import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadmapProperties } from '@app/roadmap/roadmap/roadmap.interface';
import { ApiService } from '@services/api/api.service';
import { RelatedSection } from '@app/roadmap/related-section/related-section';
import { RoadmapSection } from '@app/roadmap/roadmap-section/roadmap-section';
import { Technology } from '@models/Technology.model';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [RelatedSection, RoadmapSection],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap implements RoadmapProperties {
  techActive: boolean = false;
  tech: string = '';
  filteredTech: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.tech = this.route.snapshot.queryParamMap.get('tech') ?? '';
  }

  ngOnInit() {
    if (this.tech && this.tech.length > 2) {
      this.apiService.getTechnologies().subscribe({
        next: (technologiesData: Technology[]) => {
          this.filteredTech = Object.values(technologiesData).filter((tech: any) =>
            tech.name.toLowerCase().includes(this.tech.toLowerCase())
          );
          if (this.filteredTech != null && this.filteredTech.length > 0) {
            this.techActive = true;
            this.tech = this.filteredTech[0].name;
          }
        },
        error: (error: unknown) => {
          console.error('Error obtaining data: technologies', error);
        },
      });
    }
  }
}
