import { Component } from '@angular/core';
import { RelatedSectionProperties } from '@app/roadmap/related-section/related-section.interface';
import { Technology } from '@models/Technology.model';
import { RelatedList } from '@app/roadmap/related-list/related-list';

@Component({
  selector: 'app-related-section',
  standalone: true,
  imports: [RelatedList],
  templateUrl: './related-section.html',
  styleUrl: './related-section.css',
})
export class RelatedSection implements RelatedSectionProperties {
  relatedTechonlogies: Technology[] = [];
}
