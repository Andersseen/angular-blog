import { Component } from "@angular/core";

@Component({
  selector: "app-features",
  standalone: true,
  imports: [],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>
          <p class="mt-4 text-xl text-gray-600">
            Everything you need to succeed in the digital world
          </p>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <div class="p-3 bg-primary rounded-full">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-medium text-gray-900">
              Lightning Fast
            </h3>
            <p class="mt-2 text-center text-gray-600">
              Optimized for speed and performance
            </p>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <div class="p-3 bg-primary rounded-full">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-medium text-gray-900">Secure</h3>
            <p class="mt-2 text-center text-gray-600">
              Enterprise-grade security built-in
            </p>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          >
            <div class="p-3 bg-primary rounded-full">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-medium text-gray-900">Flexible</h3>
            <p class="mt-2 text-center text-gray-600">
              Adaptable to your needs
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {}
