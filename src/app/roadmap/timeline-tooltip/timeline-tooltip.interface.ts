export interface TimelineTooltipProperties {
  type: 'node' | 'period';
  tooltipTitle?: String | null;
  tooltipDescription?: String | null;
  tooltipNote?: String | null;
  visible: boolean;
  showTooltip: any;
  hideTooltip: any;
}
