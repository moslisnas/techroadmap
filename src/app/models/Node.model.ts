export interface NodeProperties {
  gridArea: string;
  text: string;
  size: string;
  color: string;
  textFontStyle: string;
  tooltipTitle: string;
  tooltipDescription: string;
  lts: boolean;
  url?: string;
}

export class Node implements NodeProperties {
  constructor(
    public gridArea: string,
    public text: string,
    public size: string,
    public color: string,
    public textFontStyle: string,
    public tooltipTitle: string,
    public tooltipDescription: string,
    public lts: boolean,
    public url?: string
  ) {}
}
