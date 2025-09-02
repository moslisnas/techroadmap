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

  ngOnInit() {
    this.viewBoxWidth = 300;
    this.viewBoxHeight = 50;
    this.nodeRadius = 2;
    this.graphPaddingX = 5;
    this.graphPaddingY = 5;
    this.createLines();
    this.createDots();
  }

  createLines() {
    if (this.tech.versions !== null && this.tech.versions.length > 1) {
      const totalPadding = this.graphPaddingX + this.graphPaddingY;
      const lineLength = (this.viewBoxWidth-totalPadding) / (this.tech.versions.length - 1);
      for (let i = 0; i < this.tech.versions.length - 1; i++) {
        let positionX1 = (lineLength * i) + this.graphPaddingX;
        let positionX2 = (lineLength * i) + lineLength + this.graphPaddingX - 1;
        let positionY1 = this.viewBoxHeight/2;
        let positionY2 = this.viewBoxHeight/2;
        this.lines.push([positionX1, positionY1, positionX2, positionY2]);
      }
    }
  }

  createDots(){
    if (this.tech.versions !== null && this.tech.versions.length > 1) {
      const totalPadding = this.graphPaddingX + this.graphPaddingY;
      const lineLength = (this.viewBoxWidth-totalPadding) / (this.tech.versions.length - 1);
      for (let i = 0; i < this.tech.versions.length; i++) {
        let positionX = (lineLength * i) + this.graphPaddingX;
        let positionY = this.viewBoxHeight/2;
        this.circles.push([positionX, positionY]);
      }
    }
  }
}
