import { Component } from "@angular/core";

import { NavbarComponent } from "@components/navbar/navbar.component";
import { HeroComponent } from "@components/hero/hero.component";
import { FeaturesComponent } from "@components/features/features.component";

@Component({
  selector: "app-root",
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
export class AppComponent {
  name = "Angular";
}
