import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { Roadmap } from './roadmap/roadmap/roadmap';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'roadmap', component: Roadmap },
];
