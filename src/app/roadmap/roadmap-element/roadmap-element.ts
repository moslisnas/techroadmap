import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
  Renderer2,
  OnDestroy,
} from '@angular/core';
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
  graphPaddingX: number = 0;
  graphPaddingY: number = 0;
  lines: any[] = [];
  circles: any[] = [];
  nodes: any[] = [];
  lineColor: string = '#000000';
  dotColor: string = '#000000';
  showTooltip: boolean = false;
  tooltipText: String = '';

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
        this.createDots(lineLength);
        this.createNodes();
      } else if (this.tech.versions.length === 1) {
        this.createDots(lineLength);
        this.createNodes();
      }
    }
  }

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
        textFontStyle: "font-size: 5px; font-weight: bold",
        positionTextNodeX: this.circles[i][0] - this.tech.versions[i].name.length * 1.25,
        positionTextNodeY: this.circles[i][1] - 5,
      });
    }
  }
}
