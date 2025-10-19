import { Component, ViewChild } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { TechnologyVersion } from '@models/TechnologyVersion.model';
import { TechnologyStore } from '@app/stores/technology.store';
import { TimelineTooltip } from '@app/roadmap/timeline-tooltip/timeline-tooltip';
import { TimelineRow } from '@app/roadmap/timeline-row/timeline-row';

@Component({
  selector: 'app-timeline',
  imports: [TimelineTooltip, TimelineRow],
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
  nodesPerRow: number = 6;

  constructor(public technologyStore: TechnologyStore) {}

  get tech(): Technology {
    return this.technologyStore.tech()!;
  }

  ngOnInit() {
    if (this.tech.versions !== null) {
      if (this.tech.versions.length > 1) {
        this.createPeriods();
        this.createNodes();
      } else if (this.tech.versions.length === 1) {
        this.createNodes();
      }
      this.createNodeRows();
    }
  }
  // Graphyc elements
  createPeriods() {
    for (let i = 0; i < this.tech.versions.length - 1; i++) {
      let releaseYearString1: string = '';
      let releaseYearString2: string = '';
      if (this.tech.versions[i].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i].release_date);
        releaseYearString1 = releaseDate.toLocaleDateString('en-GB', { year: 'numeric' });
      }
      if (this.tech.versions[i + 1].release_date) {
        let releaseDate: Date = new Date(this.tech.versions[i + 1].release_date);
        releaseYearString2 = releaseDate.toLocaleDateString('en-GB', { year: 'numeric' });
      }
      this.periods.push({
        color: this.tech.color_primary,
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
      this.nodes.push({
        text: this.tech.versions[i].name,
        color: this.tech.color_primary,
        textFontStyle: 'font-size: 5px; font-weight: bold',
        nodeTooltipTitle: this.tech.versions[i].name + ' - ' + releaseDateString,
        nodeTooltipDescription: this.tech.versions[i].description,
        url: this.tech.versions[i].url,
        //lts: this.tech.versions[i].lts,
      });
    }
  }
  createNodeRows() {
    for (let i: number = 0; i < this.nodes.length; i += this.nodesPerRow) {
      let periodBetweenRows =
        this.nodes.length > i + this.nodesPerRow
          ? this.periods[i + this.nodesPerRow - i / this.nodesPerRow]
          : null;
      this.nodeRows.push({
        nodes: this.nodes.slice(i, i + this.nodesPerRow),
        periods: this.periods.slice(i, i + this.nodesPerRow - 1),
        periodBetweenRows: periodBetweenRows,
      });
    }
    console.log(this.nodeRows);
  }
}
