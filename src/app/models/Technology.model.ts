import { TechnologyVersion } from './TechnologyVersion.model';

export class Technology {
  constructor(
    public name: string,
    public description: string,
    public url: string,
    public logo: string,
    public versions: TechnologyVersion[]
  ) {}
}
