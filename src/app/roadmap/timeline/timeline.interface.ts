import { Technology } from '@models/Technology.model';
import { TechnologyVersion } from '@models/TechnologyVersion.model';

export interface TimelineProperties {
  versions: TechnologyVersion[];
  periods: any[];
  nodes: any[];
  nodeRows: any[];
  nodesPerRow: number;
  gridDisplacementX: number;
  gridDisplacementY: number;
  initialDisplacementX: number;
  nodeGridHeight: number;
  periodGridHeight: number;
  curverPeriodGridHeight: number;
  gridTemplateColumns: string;
  nodeWidthHeight: string;
  periodWidth: string;
  visibleIndexes: number[];
  tech: Technology;
}
