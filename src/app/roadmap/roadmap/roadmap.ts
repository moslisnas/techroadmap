import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelatedSection } from '@app/roadmap/related-section/related-section';
import { RoadmapSection } from '@app/roadmap/roadmap-section/roadmap-section';
import TechMockData from 'data/TechData';

@Component({
  selector: 'app-roadmap',
  imports: [RelatedSection, RoadmapSection],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap {
  techActive: boolean = false;
  private route = inject(ActivatedRoute);
  tech: string = this.route.snapshot.queryParamMap.get('tech') ?? '';
  filteredTech: any[] = [];

  ngOnInit() {
    if (this.tech && this.tech.length > 2) {
      this.filteredTech = Object.values(TechMockData).filter((tech: any) =>
        tech.name.toLowerCase().includes(this.tech.toLowerCase())
      );
      if (this.filteredTech != null && this.filteredTech.length > 0) {
        this.techActive = true;
        this.tech = this.filteredTech[0].name;
      }
    }
  }
}
