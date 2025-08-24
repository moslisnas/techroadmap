import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./common/nav/nav-bar/nav-bar";
import { Footer } from "./common/footer/footer/footer";
import { Home } from "./home/home/home";
import { Roadmap } from "./roadmap/roadmap/roadmap";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, Home, Roadmap],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('techroadmap');
}
