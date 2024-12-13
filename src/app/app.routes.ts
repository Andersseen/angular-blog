import { type Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadComponent: () => import("./pages/home/home.component"),
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about.component"),
  },
  {
    path: "services",
    loadComponent: () => import("./pages/services/services.component"),
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/contact.component"),
  },

  { path: "**", redirectTo: "/home", pathMatch: "full" },
];
