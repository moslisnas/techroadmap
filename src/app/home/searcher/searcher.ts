import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  imports: [FormsModule],
  templateUrl: './searcher.html',
  styleUrl: './searcher.css',
})
export class Searcher {
  searchValue: string = '';

  constructor(private router: Router) {}

  redirectRoadmapPage() {
    if (this.searchValue && this.searchValue.length > 2) {
      this.router.navigate(['/roadmap'], {
        queryParams: { tech: this.searchValue },
      });
    }
  }
}
