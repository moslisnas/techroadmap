export class TechnologyVersion {
  constructor(
    public name: string,
    public description: string,
    public release_date: Date,
    public url?: string,
    public lts?: boolean
  ) {}
}
