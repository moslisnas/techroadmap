import { Injectable } from '@angular/core';
import { Technology } from '@models/Technology.model';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  public technology?: Technology;

  getTechnology(): Technology | undefined {
    return this.technology;
  }

  setTechnology(technology: Technology) {
    this.technology = technology;
  }
}
