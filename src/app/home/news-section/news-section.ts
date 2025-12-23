import { Component } from '@angular/core';
import { NewsSectionProperties } from '@app/home/news-section/news-section.interface';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [],
  templateUrl: './news-section.html',
  styleUrl: './news-section.css',
})
export class NewsSection implements NewsSectionProperties {
  news: string[] = [];
}
