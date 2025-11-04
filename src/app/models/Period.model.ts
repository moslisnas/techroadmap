export interface PeriodProperties {
  gridArea: string;
  color: string;
  periodWidth: string;
  styleType: string;
  direction: string;
  tooltipDescription: string;
}

export class Period implements PeriodProperties {
  constructor(
    public gridArea: string,
    public color: string,
    public periodWidth: string,
    public styleType: string,
    public direction: string,
    public tooltipDescription: string
  ) {}
}
