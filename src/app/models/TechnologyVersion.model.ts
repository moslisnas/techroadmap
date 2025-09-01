export class TechnologyVersion {
  constructor(
    public name: string,
    public description: string,
    public date?: string,
    public url?: string,
    public lts?: boolean
  ) {}
}
