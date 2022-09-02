import { writable } from "svelte/store";

export let darkMode = writable(false);

export const PAGES = {
    "/": "Home",
    // "/schedule": "Zeitplan",
    "/about": "Über uns",
    // "/contact": "Kontakt",
    "/links": "Links",
};