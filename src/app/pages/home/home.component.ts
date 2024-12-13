import { Component } from "@angular/core";
import { BgHeroComponent } from "@components/bg-hero/bg-hero.component";
import { FeaturesComponent } from "@components/features/features.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [BgHeroComponent, FeaturesComponent],
  templateUrl: "./home.component.html",
})
export default class HomeComponent {}
