import { Component } from '@angular/core';
import { RelatedListProperties } from '@app/roadmap/related-list/related-list.interface';

@Component({
  selector: 'app-related-list',
  imports: [],
  templateUrl: './related-list.html',
  styleUrl: './related-list.css',
})
export class RelatedList implements RelatedListProperties {}
