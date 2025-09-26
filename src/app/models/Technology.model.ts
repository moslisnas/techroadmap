import { TechnologyVersion } from '@models/TechnologyVersion.model';

export class Technology {
  constructor(
    public name: string,
    public description: string,
    public url: string,
    public logo_path: string,
    public color_primary: string,
    public color_secondary: string,
    public versions: TechnologyVersion[]
  ) {}
}
