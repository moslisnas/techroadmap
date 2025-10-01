import { Injectable, signal } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { ApiService } from '@services/api/Api.service';

@Injectable({ providedIn: 'root' })
export class TechnologyStore {
  tech = signal<Technology | null>(null);

  constructor(private apiService: ApiService) {}

  loadTechWithDependencies(id: number) {
    this.apiService.getTechnologyByIdWithVersions(id).subscribe({
      next: (technologyData) => {
        this.tech.set(technologyData);
      },
      error: (error) => {
        console.error('Error obtaining data: technology', error);
      },
    });
  }
}
