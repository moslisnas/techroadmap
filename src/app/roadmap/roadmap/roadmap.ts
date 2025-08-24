import { Component } from '@angular/core';
import { RelatedSection } from "../related-section/related-section";
import { RoadmapSection } from "../roadmap-section/roadmap-section";

@Component({
  selector: 'app-roadmap',
  imports: [RelatedSection, RoadmapSection],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css'
})
export class Roadmap {

}
