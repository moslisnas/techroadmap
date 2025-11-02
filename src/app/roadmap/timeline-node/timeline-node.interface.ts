import { Node } from '@models/Node.model';

export interface TimelineNodeProperties {
  node: Node;
  tooltipVisible: boolean;
  isHovered: boolean;
  showVersionTooltip: any;
  hideVersionTooltip: any;
}
