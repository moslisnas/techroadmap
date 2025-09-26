import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Technology } from '@models/Technology.model';
import { Timeline } from '../timeline/timeline';

@Component({
  selector: 'app-roadmap-element',
  imports: [Timeline],
  templateUrl: './roadmap-element.html',
  styleUrl: './roadmap-element.css',
})
export class RoadmapElement {
  private _tech!: Technology;

  @Input()
  set tech(value: Technology) {
    if (value) {
      this._tech = value;
    }
  }
  get tech(): Technology {
    return this._tech;
  }
}
