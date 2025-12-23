import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Technology } from '@models/Technology.model';
import { SearcherProperties } from '@app/home/searcher/searcher.interface';
import { ApiService } from '@services/api/api.service';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searcher.html',
  styleUrl: './searcher.css',
})
export class Searcher implements SearcherProperties {
  searchValue: string = '';
  filteredTech: Technology[] = [];
  showDropdown: boolean = false;
  technologies: Technology[] = [];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTechnologies().subscribe({
      next: (technologiesData: Technology[]) => {
        this.technologies = technologiesData;
      },
      error: (error: unknown) => {
        console.error('Error obtaining data: technologies', error);
      },
    });
  }

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
      this.filteredTech = Object.values(this.technologies).filter((tech: Technology) =>
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
