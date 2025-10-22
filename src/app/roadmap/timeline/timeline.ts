import { Component, ViewChild } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { TechnologyVersion } from '@models/TechnologyVersion.model';
import { TechnologyStore } from '@app/stores/technology.store';
import { TimelineTooltip } from '@app/roadmap/timeline-tooltip/timeline-tooltip';
import { TimelinePeriod } from '../timeline-period/timeline-period';
import { TimelineNode } from '../timeline-node/timeline-node';

@Component({
  selector: 'app-timeline',
  imports: [TimelineTooltip, TimelinePeriod, TimelineNode],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  @ViewChild('nodeTooltip', { static: false }) nodeTooltipComponent!: TimelineTooltip;
  @ViewChild('periodTooltip', { static: false }) periodTooltipComponent!: TimelineTooltip;

  versions: TechnologyVersion[] = [];
  periods: any[] = [];
  nodes: any[] = [];
  nodeRows: any[] = [];
  nodesPerRow: number = 6; //TODO: calculate based on screen size
  gridDisplacementX: number = 1;
  gridDisplacementY: number = 1;
  initialDisplacementX: number = 1;
  nodeGridHeight: number = 1;
  periodGridHeight: number = 1;
  curverPeriodGridHeight: number = 2;
  numGridColumns: number = 1;
  nodeWidthHeight: string = '2.5rem';
  periodWidth: string = '6.5rem';

  constructor(public technologyStore: TechnologyStore) {}

  get tech(): Technology {
    return this.technologyStore.tech()!;
  }

  ngOnInit() {
    if (this.tech.versions !== null) {
      if (this.tech.versions.length > 1) {
        this.numGridColumns = this.tech.versions.length * 2 + 1;
        this.createPeriods();
        this.createNodes();
      } else if (this.tech.versions.length === 1) {
        this.createNodes();
      }
    }
  }
  // Graphyc elements
  createPeriods() {
    for (let i = 0; i < this.tech.versions.length - 1; i++) {
      let releaseYearString1: string = '';
      let releaseYearString2: string = '';
      let styleType = 'straight';
      let direction = 'right';
      if (this.tech.versions[i].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i].release_date);
        releaseYearString1 = releaseDate.toLocaleDateString('en-GB', { year: 'numeric' });
      }
      if (this.tech.versions[i + 1].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i + 1].release_date);
        releaseYearString2 = releaseDate.toLocaleDateString('en-GB', { year: 'numeric' });
      }
      //Position at timeline component grid
      let gridAreaX1: number = 0;
      let gridAreaX2: number = 0;
      let gridAreaY1: number = 0;
      let gridAreaY2: number = 0;
      if (Math.floor((i * 2) / (this.nodesPerRow * 2)) % 2 === 0) {
        gridAreaX1 =
          this.gridDisplacementX + this.initialDisplacementX + (i % this.nodesPerRow) * 2 + 1;
        gridAreaX2 = gridAreaX1 + 1;
        direction = 'right';
      } else {
        gridAreaX1 = this.nodesPerRow * 2 - (i % this.nodesPerRow) * 2;
        gridAreaX2 = gridAreaX1 - 1;
        direction = 'left';
      }

      gridAreaY1 = this.gridDisplacementY + Math.floor(i / this.nodesPerRow);
      //Curved periods
      if ((i + 1) % this.nodesPerRow === 0 && i !== 0) {
        styleType = 'curved';
        gridAreaY2 = gridAreaY1 + this.curverPeriodGridHeight;
      } else {
        gridAreaY2 = gridAreaY1 + this.periodGridHeight;
      }
      //Add period to array of periods
      this.periods.push({
        gridArea: `${gridAreaY1} / ${gridAreaX1} / ${gridAreaY2} / ${gridAreaX2}`,
        color: this.tech.color_primary,
        periodWidth: this.periodWidth,
        styleType: styleType,
        direction: direction,
        lineTooltipDescription: releaseYearString1 + ' - ' + releaseYearString2,
      });
    }
  }
  createNodes() {
    for (let i = 0; i < this.tech.versions.length; i++) {
      let releaseDateString: string = '';
      if (this.tech.versions[i].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i].release_date);
        releaseDateString = releaseDate.toLocaleDateString('en-GB');
      }
      //Position at timeline component grid
      let gridAreaX1: number = 0;
      let gridAreaX2: number = 0;
      if (Math.floor((i * 2) / (this.nodesPerRow * 2)) % 2 === 0) {
        gridAreaX1 =
          this.gridDisplacementX + this.initialDisplacementX + (i % this.nodesPerRow) * 2;
        gridAreaX2 = gridAreaX1 + 1;
      } else {
        gridAreaX1 = this.nodesPerRow * 2 - (i % this.nodesPerRow) * 2 + 1;
        gridAreaX2 = gridAreaX1 - 1;
      }
      let gridAreaY1: number = this.gridDisplacementY + Math.floor(i / this.nodesPerRow);
      let gridAreaY2: number = gridAreaY1 + 1;
      //Add node to array of nodes
      this.nodes.push({
        gridArea: `${gridAreaY1} / ${gridAreaX1} / ${gridAreaY2} / ${gridAreaX2}`,
        text: this.tech.versions[i].name,
        size: this.nodeWidthHeight,
        color: this.tech.color_primary,
        textFontStyle: 'font-size: 5px; font-weight: bold',
        nodeTooltipTitle: this.tech.versions[i].name + ' - ' + releaseDateString,
        nodeTooltipDescription: this.tech.versions[i].description,
        url: this.tech.versions[i].url,
        //lts: this.tech.versions[i].lts,
      });
    }
  }

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
