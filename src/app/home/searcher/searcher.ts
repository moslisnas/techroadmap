import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Technology } from '@app/models/Technology.model';
import TechMockData from 'data/TechData';

@Component({
  selector: 'app-searcher',
  imports: [FormsModule],
  templateUrl: './searcher.html',
  styleUrl: './searcher.css',
})
export class Searcher {
  searchValue: string = '';
  filteredTech: Technology[] = [];
  showDropdown: boolean = false;

  constructor(private router: Router) {}

  // Events
  redirectRoadmapPage() {
    if (this.searchValue && this.searchValue.length > 2) {
      this.router.navigate(['/roadmap'], {
        queryParams: { tech: this.searchValue },
      });
    }
  }

  onSearchChange() {
    if (this.searchValue.length > 1) {
      const searchLower = this.searchValue.toLowerCase();
      this.filteredTech = Object.values(TechMockData).filter((tech: Technology) =>
        tech.name.toLowerCase().includes(searchLower)
      );
      this.showDropdown = this.filteredTech.length > 0;
    } else {
      this.filteredTech = [];
      this.showDropdown = false;
    }
  }

  selectTech(tech: any) {
    this.searchValue = tech.name;
    this.showDropdown = false;
    this.redirectRoadmapPage();
  }
}
