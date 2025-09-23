import { TechnologyVersion } from '@models/TechnologyVersion.model';

export class Technology {
  constructor(
    public name: string,
    public description: string,
    public url: string,
    public logo_path: string,
    public colors: any,
    public versions: TechnologyVersion[]
  ) {}
}
