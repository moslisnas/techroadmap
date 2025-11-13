import { Component, HostListener } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { TechnologyVersion } from '@models/TechnologyVersion.model';
import { Node } from '@models/Node.model';
import { Period } from '@models/Period.model';
import { TechnologyStore } from '@app/stores/technology.store';
import { TimelinePeriod } from '@app/roadmap/timeline-period/timeline-period';
import { TimelineNode } from '@app/roadmap/timeline-node/timeline-node';
import { TimelineProperties } from '@app/roadmap/timeline/timeline.interface';

@Component({
  selector: 'app-timeline',
  imports: [TimelinePeriod, TimelineNode],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline implements TimelineProperties {
  versions: TechnologyVersion[] = [];
  periods: Period[] = [];
  nodes: Node[] = [];
  nodeRows: any[] = [];
  nodesPerRow: number = 3;
  gridDisplacementX: number = 1;
  gridDisplacementY: number = 1;
  initialDisplacementX: number = 1;
  nodeGridHeight: number = 1;
  periodGridHeight: number = 1;
  curverPeriodGridHeight: number = 2;
  gridTemplateColumns: string = '';
  nodeWidthHeight: string = '2.5rem';
  periodWidth: string = '6.5rem';
  visibleIndexes: number[] = [];

  constructor(private technologyStore: TechnologyStore) {}

  get tech(): Technology {
    return this.technologyStore.tech()!;
  }

  ngOnInit() {
    this.calculateNodesPerRow();
    if (this.tech.versions !== null) {
      if (this.tech.versions.length > 1) {
        this.gridTemplateColumns = this.generateGridTemplateColumns(this.nodesPerRow);
        this.createPeriods();
        this.createNodes();
      } else if (this.tech.versions.length === 1) {
        this.createNodes();
      }
    }

    this.createTimelineAnimation();
  }
  async createTimelineAnimation() {
    const total = Math.max(this.nodes.length, this.periods.length);
    for (let i = 0; i < total; i++) {
      if (i < this.nodes.length) {
        this.visibleIndexes.push(i * 2);
        await this.delay(100);
        //await this.delay(window.innerWidth < 640 ? 150 : 250);}
      }
      if (i < this.periods.length) {
        this.visibleIndexes.push(i * 2 + 1);
        await this.delay(100);
        //await this.delay(window.innerWidth < 640 ? 150 : 250);}
      }
    }
  }
  delay(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // Responsive timeline methods
  @HostListener('window:resize')
  onResize() {
    this.calculateNodesPerRow();
    this.gridTemplateColumns = this.generateGridTemplateColumns(this.nodesPerRow);
    this.updateGridAreas();
    this.updatePeriodDirectionsAndStyles();
  }
  calculateNodesPerRow() {
    const windowWidth = window.innerWidth;

    const remToPx = 16;
    const nodeWidthPx = parseFloat(this.nodeWidthHeight.replace('rem', '')) * remToPx;
    const periodWidthPx = parseFloat(this.periodWidth.replace('rem', '')) * remToPx;
    const blockWidth = nodeWidthPx + periodWidthPx;

    const estimatedNodes = Math.floor(windowWidth / blockWidth);
    if (this.tech.versions.length < estimatedNodes - 2) {
      this.nodesPerRow = this.tech.versions.length;
    } else {
      this.nodesPerRow = Math.max(3, estimatedNodes - 2);
    }
  }
  updateGridAreas() {
    for (let i: number = 0; i < this.nodes.length; i++) {
      this.nodes[i].gridArea = this.createNodeGridAreas(i);
    }
    for (let i: number = 0; i < this.nodes.length - 1; i++) {
      this.periods[i].gridArea = this.createPeriodGridAreas(i);
    }
  }
  updatePeriodDirectionsAndStyles() {
    for (let i: number = 0; i < this.nodes.length - 1; i++) {
      //Period direction
      this.periods[i].direction = 'right';
      if (Math.floor((i * 2) / (this.nodesPerRow * 2)) % 2 === 0) {
        this.periods[i].direction = 'right';
      } else {
        this.periods[i].direction = 'left';
      }
      //Curved periods
      this.periods[i].styleType = 'straight';
      if ((i + 1) % this.nodesPerRow === 0 && i !== 0) {
        this.periods[i].styleType = 'curved';
      }
    }
  }
  // Graphyc elements
  createPeriods() {
    for (let i = 0; i < this.tech.versions.length - 1; i++) {
      let releaseYearString1: string = '';
      let releaseYearString2: string = '';
      let gridArea: string = '';
      let styleType: string = 'straight';
      let direction: string = 'right';
      if (this.tech.versions[i].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i].release_date);
        releaseYearString1 = releaseDate.toLocaleDateString('en-GB', { year: 'numeric' });
      }
      if (this.tech.versions[i + 1].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i + 1].release_date);
        releaseYearString2 = releaseDate.toLocaleDateString('en-GB', { year: 'numeric' });
      }
      //Position at timeline component grid
      gridArea = this.createPeriodGridAreas(i);
      //Period direction
      if (Math.floor((i * 2) / (this.nodesPerRow * 2)) % 2 === 0) {
        direction = 'right';
      } else {
        direction = 'left';
      }
      //Curved periods
      if ((i + 1) % this.nodesPerRow === 0 && i !== 0) {
        styleType = 'curved';
      }
      //Add period to array of periods
      this.periods.push({
        gridArea: gridArea,
        color: this.tech.color_primary,
        periodWidth: this.periodWidth,
        styleType: styleType,
        direction: direction,
        tooltipDescription: releaseYearString1 + ' - ' + releaseYearString2,
      });
    }
  }
  createPeriodGridAreas(periodIndex: number) {
    let gridAreaX1: number = 0;
    let gridAreaX2: number = 0;
    let gridAreaY1: number = 0;
    let gridAreaY2: number = 0;
    if (Math.floor((periodIndex * 2) / (this.nodesPerRow * 2)) % 2 === 0) {
      gridAreaX1 =
        this.gridDisplacementX +
        this.initialDisplacementX +
        (periodIndex % this.nodesPerRow) * 2 +
        1;
      gridAreaX2 = gridAreaX1 + 1;
    } else {
      gridAreaX1 = this.nodesPerRow * 2 - (periodIndex % this.nodesPerRow) * 2;
      gridAreaX2 = gridAreaX1 - 1;
    }

    gridAreaY1 = this.gridDisplacementY + Math.floor(periodIndex / this.nodesPerRow);
    //Curved periods
    if ((periodIndex + 1) % this.nodesPerRow === 0 && periodIndex !== 0) {
      gridAreaY2 = gridAreaY1 + this.curverPeriodGridHeight;
    } else {
      gridAreaY2 = gridAreaY1 + this.periodGridHeight;
    }

    return `${gridAreaY1} / ${gridAreaX1} / ${gridAreaY2} / ${gridAreaX2}`;
  }

  createNodes() {
    for (let i = 0; i < this.tech.versions.length; i++) {
      let releaseDateString: string = '';
      let gridArea: string = '';
      if (this.tech.versions[i].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i].release_date);
        releaseDateString = releaseDate.toLocaleDateString('en-GB');
      }
      //Position at timeline component grid
      gridArea = this.createNodeGridAreas(i);

      //Add node to array of nodes
      this.nodes.push({
        gridArea: gridArea,
        text: this.tech.versions[i].name,
        size: this.nodeWidthHeight,
        color: this.tech.color_primary,
        textFontStyle: 'font-size: 5px; font-weight: bold',
        tooltipTitle: this.tech.versions[i].name + ' - ' + releaseDateString,
        tooltipDescription: this.tech.versions[i].description,
        url: this.tech.versions[i].url,
        lts: this.tech.versions[i].lts
      });
    }
  }
  createNodeGridAreas(nodeIndex: number) {
    let gridAreaX1: number = 0;
    let gridAreaX2: number = 0;
    if (Math.floor((nodeIndex * 2) / (this.nodesPerRow * 2)) % 2 === 0) {
      gridAreaX1 =
        this.gridDisplacementX + this.initialDisplacementX + (nodeIndex % this.nodesPerRow) * 2;
      gridAreaX2 = gridAreaX1 + 1;
    } else {
      gridAreaX1 = this.nodesPerRow * 2 - (nodeIndex % this.nodesPerRow) * 2 + 1;
      gridAreaX2 = gridAreaX1 - 1;
    }
    let gridAreaY1: number = this.gridDisplacementY + Math.floor(nodeIndex / this.nodesPerRow);
    let gridAreaY2: number = gridAreaY1 + 1;

    return `${gridAreaY1} / ${gridAreaX1} / ${gridAreaY2} / ${gridAreaX2}`;
  }

  //HTML methods
  generateGridTemplateColumns(numNodes: number) {
    let parts = [];
    for (let i = 0; i < numNodes; i++) {
      parts.push(this.periodWidth);
      parts.push(this.nodeWidthHeight);
    }
    parts.push(this.periodWidth);
    return parts.join(' ');
  }
}
