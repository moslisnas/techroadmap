import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelatedSection } from '@app/roadmap/related-section/related-section';
import { RoadmapSection } from '@app/roadmap/roadmap-section/roadmap-section';

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

  ngOnInit() {
    if (this.tech && this.tech.length > 2) {
      this.techActive = true;
    }
  }
}
