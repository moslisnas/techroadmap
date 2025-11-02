import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '@app/common/nav/nav-bar/nav-bar';
import { Footer } from '@app/common/footer/footer/footer';
import { AppProperties } from './app.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AppProperties {
  protected readonly title = signal('techroadmap');
}
