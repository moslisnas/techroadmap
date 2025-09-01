import { Component, Input,ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
  Renderer2,
  OnDestroy } from '@angular/core';
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
}
