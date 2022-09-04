import { writable } from "svelte/store";
import type { IDay } from "@/services/types";

export let darkMode = writable(false);

export const PAGES = {
  "/": "Home",
  "/schedule": "Zeitplan",
  "/about": "Über uns",
  // "/contact": "Kontakt",
  "/links": "Links",
};

export let schedule = writable<IDay[]>([]);
