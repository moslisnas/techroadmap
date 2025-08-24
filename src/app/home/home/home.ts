import { Component } from '@angular/core';
import { SearcherSection } from "../searcher-section/searcher-section";
import { NewsSection } from "../news-section/news-section";

@Component({
  selector: 'app-home',
  imports: [SearcherSection, NewsSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
