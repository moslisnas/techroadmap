import { Component, inject } from '@angular/core';
import { RelatedSection } from "../related-section/related-section";
import { RoadmapSection } from "../roadmap-section/roadmap-section";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  imports: [RelatedSection, RoadmapSection],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css'
})
export class Roadmap {
  techActive:boolean = false;
  private route = inject(ActivatedRoute);
  tech:string = this.route.snapshot.queryParamMap.get('tech') ?? '';
  
  constructor() {
    if(this.tech && this.tech.length > 2) {
      this.techActive = true;
    }
  }

}
