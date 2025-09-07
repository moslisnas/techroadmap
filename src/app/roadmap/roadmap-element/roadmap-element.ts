import { Component, Input } from '@angular/core';
import { Technology } from '@app/models/Technology.model';
import { TechnologyVersion } from '@app/models/TechnologyVersion.model';

@Component({
  selector: 'app-roadmap-element',
  imports: [],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement {
  @Input() tech!: Technology;

  versions: TechnologyVersion[] = [];
  viewBoxWidth: number = 0;
  viewBoxHeight: number = 0;
  nodeRadius: number = 0;
  lineWidth: number = 1;
  graphPaddingX: number = 0;
  graphPaddingY: number = 0;
  lines: any[] = [];
  periods: any[] = [];
  circles: any[] = [];
  nodes: any[] = [];
  lineColor: string = '#000000';
  dotColor: string = '#000000';
  versionTooltipVisible: boolean = false;
  periodTooltipVisible: boolean = false;
  versionTooltipTitle: String = '';
  versionTooltipDescription: String = '';
  versionTooltipNote: String = '';
  versionTooltipPosition: number[] = [0, 0];
  periodTooltipDescription: String = '';
  periodTooltipPosition: number[] = [0, 0];

  ngOnInit() {
    this.viewBoxWidth = 300;
    this.viewBoxHeight = 50;
    this.nodeRadius = 2;
    this.graphPaddingX = 5;
    this.graphPaddingY = 5;
    if (this.tech.versions !== null) {
      const totalPadding = this.graphPaddingX + this.graphPaddingY;
      const lineLength = (this.viewBoxWidth - totalPadding) / (this.tech.versions.length - 1);
      if (this.tech.versions.length > 1) {
        this.createLines(lineLength);
        this.createPeriods();
        this.createDots(lineLength);
        this.createNodes();
      } else if (this.tech.versions.length === 1) {
        this.createDots(lineLength);
        this.createNodes();
      }
    }
  }
  // Graphyc elements
  createLines(lineLength: number) {
    for (let i = 0; i < this.tech.versions.length - 1; i++) {
      this.lineColor = this.tech.colors.primary;
      let positionX1 = lineLength * i + this.graphPaddingX;
      let positionX2 = lineLength * i + lineLength + this.graphPaddingX - 1;
      let positionY1 = this.viewBoxHeight / 2;
      let positionY2 = this.viewBoxHeight / 2;
      this.lines.push([positionX1, positionY1, positionX2, positionY2]);
    }
  }
  createPeriods() {
    for (let i = 0; i < this.tech.versions.length - 1; i++) {
      let positionLineX1 = this.lines[i][0];
      let positionLineY1 = this.lines[i][1];
      let positionLineX2 = this.lines[i][2];
      let positionLineY2 = this.lines[i][3];
      this.periods.push({
        positionLineX1: positionLineX1,
        positionLineX2: positionLineX2,
        positionLineY1: positionLineY1,
        positionLineY2: positionLineY2,
        lineTooltipDescription: this.tech.versions[i].date + ' - ' + this.tech.versions[i + 1].date,
        positionTooltipPeriodX: this.lines[i][0] * 3.825 + 800/this.tech.versions.length, // TODO: improve position calculation
        positionTooltipPeriodY: 225, // TODO: improve position calculation
      });
    }
  }
  createDots(lineLength: number) {
    for (let i = 0; i < this.tech.versions.length; i++) {
      this.dotColor = this.tech.colors.primary;
      let positionX = lineLength * i + this.graphPaddingX;
      let positionY = this.viewBoxHeight / 2;
      this.circles.push([positionX, positionY]);
    }
  }
  createNodes() {
    for (let i = 0; i < this.tech.versions.length; i++) {
      this.nodes.push({
        positionCircleX: this.circles[i][0],
        positionCircleY: this.circles[i][1],
        text: this.tech.versions[i].name,
        textFontStyle: 'font-size: 5px; font-weight: bold',
        positionTextNodeX: this.circles[i][0] - this.tech.versions[i].name.length * 1.25,
        positionTextNodeY: this.circles[i][1] - 5,
        nodeTooltipTitle: this.tech.versions[i].name + ' - ' + this.tech.versions[i].date,
        nodeTooltipDescription: this.tech.versions[i].description,
        positionTooltipNodeX: this.circles[i][0] * 3.5, // TODO: improve position calculation
        positionTooltipNodeY: 175, // TODO: improve position calculation
        url: this.tech.versions[i].description
        //lts: this.tech.versions[i].lts,
      });
    }
  }

  // Interaction methods and events
  showVersionTooltip(node: any, elementRef: any) {
    this.versionTooltipVisible = true;
    this.versionTooltipTitle = node.nodeTooltipTitle;
    this.versionTooltipDescription = node.nodeTooltipDescription;
    this.versionTooltipNote = 'Click for more information';
    this.versionTooltipPosition = [node.positionTooltipNodeX, node.positionTooltipNodeY];
    elementRef.setAttribute('r', this.nodeRadius * 2);
  }
  hideVersionTooltip(elementRef: any) {
    this.versionTooltipVisible = false;
    this.versionTooltipTitle = '';
    this.versionTooltipDescription = '';
    this.versionTooltipNote = '';
    this.versionTooltipPosition = [0, 0];
    elementRef.setAttribute('r', this.nodeRadius);
  }
  openVersionUrl(node: any) {
    window.open(node.url, '_blank');
  }
  showPeriodTooltip(period: any, elementRef: any) {
    this.periodTooltipVisible = true;
    this.periodTooltipDescription = period.lineTooltipDescription;
    this.periodTooltipPosition = [period.positionTooltipPeriodX, period.positionTooltipPeriodY];
    elementRef.setAttribute('style','stroke-width: 2; stroke: ' + this.tech.colors.primary);
  }
  hidePeriodTooltip(elementRef: any) {
    this.periodTooltipVisible = false;
    this.periodTooltipDescription = '';
    this.periodTooltipPosition = [0, 0];
    elementRef.setAttribute('style','stroke-width: ' + this.lineWidth + '; stroke: ' + this.tech.colors.primary);
  }
}
