import { Technology } from '@models/Technology.model';

export interface SearcherProperties {
  searchValue: string;
  filteredTech: Technology[];
  showDropdown: boolean;
  technologies: Technology[];
}
