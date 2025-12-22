import { Injectable, signal } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { ApiService } from '../../app/services/api/api.service';

@Injectable({ providedIn: 'root' })
export class TechnologyStore {
  tech = signal<Technology | null>(null);

  constructor(private apiService: ApiService) {}

  loadTechWithDependencies(id: number) {
    this.tech.set(null);
    this.apiService.getTechnologyByIdWithVersions(id).subscribe({
      next: (technologyData: Technology) => {
        this.tech.set(technologyData);
      },
      error: (error: unknown) => {
        console.error('Error obtaining data: technology', error);
      },
    });
  }
}
