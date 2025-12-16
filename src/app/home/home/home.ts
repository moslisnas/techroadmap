import { Component } from '@angular/core';
import { HomeProperties } from '@app/home/home/home.interface';
import { SearcherSection } from '@app/home/searcher-section/searcher-section';
import { NewsSection } from '@app/home/news-section/news-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearcherSection, NewsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements HomeProperties {}
