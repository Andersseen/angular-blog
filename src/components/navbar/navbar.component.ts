import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <span class="text-white text-xl font-bold">Logo</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                routerLink="home"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Home</a
              >
              <a
                routerLink="about"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >About</a
              >
              <a
                routerLink="services"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Services</a
              >
              <a
                routerLink="contact"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
