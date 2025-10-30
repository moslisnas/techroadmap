import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelatedSection } from '@app/roadmap/related-section/related-section';
import { RoadmapSection } from '@app/roadmap/roadmap-section/roadmap-section';
import { ApiService } from '@services/api/api.service';

@Component({
  selector: 'app-roadmap',
  imports: [RelatedSection, RoadmapSection],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap {
  techActive: boolean = false;
  tech: string = '';
  filteredTech: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.tech = this.route.snapshot.queryParamMap.get('tech') ?? '';
  }

  ngOnInit() {
    if (this.tech && this.tech.length > 2) {
      this.apiService.getTechnologies().subscribe({
        next: (technologiesData) => {
          this.filteredTech = Object.values(technologiesData).filter((tech: any) =>
            tech.name.toLowerCase().includes(this.tech.toLowerCase())
          );
          if (this.filteredTech != null && this.filteredTech.length > 0) {
            this.techActive = true;
            this.tech = this.filteredTech[0].name;
          }
        },
        error: (error) => {
          console.error('Error obtaining data: technologies', error);
        },
      });
    }
  }
}
