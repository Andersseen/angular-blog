import { Component, Input } from "@angular/core";

@Component({
  selector: "app-features",
  standalone: true,
  imports: [],
  template: `
    <section class="py-20 bg-neutral-100 relative">
      <div class="w-full absolute top-0 left-0 overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill fill-neutral-900"
          ></path>
        </svg>
      </div>
      <!-- Features -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2
            class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-900"
          >
            Explore tools
          </h2>
          <p class="mt-3 text-gray-800 dark:text-neutral-900">
            The powerful and flexible theme for all kinds of businesses.
          </p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
          <!-- Icon Block -->
          <div class="col-span-6 sm:col-span-4 text-center">
            <svg
              class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-900"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path
                d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
              />
              <path d="M8 18h.01" />
            </svg>
            <div class="mt-2 sm:mt-6">
              <h3
                class="text-lg font-semibold text-gray-800 dark:text-neutral-900"
              >
                Responsive
              </h3>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="col-span-6 sm:col-span-4 text-center">
            <svg
              class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-900"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
            <div class="mt-2 sm:mt-6">
              <h3
                class="text-lg font-semibold text-gray-800 dark:text-neutral-900"
              >
                Customizable
              </h3>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="col-span-6 col-start-4 sm:col-span-4 text-center">
            <svg
              class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-900"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"
              />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div class="mt-2 sm:mt-6">
              <h3
                class="text-lg font-semibold text-gray-800 dark:text-neutral-900"
              >
                24/7 Support
              </h3>
            </div>
          </div>
          <!-- End Icon Block -->
        </div>
        <!-- End Grid -->

        <!-- Grid -->
        <div
          class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8"
        >
          <div class="col-span-4 md:col-span-3">
            @for (item of images; track $index) {
            <img class="rounded-xl" [src]="item" alt="Features Image" />
            }
          </div>
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Features -->
    </section>
  `,
})
export class FeaturesComponent {
  @Input() images: string[] = [];
}
// <div class="hidden md:block col-span-4 md:col-span-3">
// <img
//   class="rounded-xl"
//   src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
//   alt="Features Image"
// />
// </div>
// <!-- End Col -->

// <div class="col-span-4 md:col-span-3">
// <img
//   class="rounded-xl"
//   src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
//   alt="Features Image"
// />
// </div>
// <!-- End Col -->

// <div class="col-span-4 md:col-span-3">
// <img
//   class="rounded-xl"
//   src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
//   alt="Features Image"
// />
// </div>
// <!-- End Col -->

// <div class="col-span-4 md:col-span-3">
// <img
//   class="rounded-xl"
//   src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
//   alt="Features Image"
// />
// </div>
