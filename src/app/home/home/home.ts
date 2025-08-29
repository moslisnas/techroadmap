import { Component } from '@angular/core';
import { SearcherSection } from "@app/home/searcher-section/searcher-section";
import { NewsSection } from "@app/home/news-section/news-section";

@Component({
  selector: 'app-home',
  imports: [SearcherSection, NewsSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
