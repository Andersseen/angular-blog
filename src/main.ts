import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { FeaturesComponent } from './app/components/features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FeaturesComponent],
  template: `
    <main class="min-h-screen bg-gray-900">
      <app-navbar />
      <app-hero />
      <app-features />
    </main>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);