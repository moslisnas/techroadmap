
import { Component } from '@angular/core';
import { Technology } from '@models/Technology.model';

@Component({
  selector: 'app-roadmap',
  template: '',
  standalone: false,
})
export class MockRoadmap {}

export const mockTechs = [{ name: 'Angular' }, { name: 'React' }] as Technology[];