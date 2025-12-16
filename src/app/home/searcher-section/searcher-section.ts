import { Component } from '@angular/core';
import { SearcherSectionProperties } from '@app/home/searcher-section/searcher-section.interface';
import { Searcher } from '@app/home/searcher/searcher';

@Component({
  selector: 'app-searcher-section',
  standalone: true,
  imports: [Searcher],
  templateUrl: './searcher-section.html',
  styleUrl: './searcher-section.css',
})
export class SearcherSection implements SearcherSectionProperties {}
