import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCSS()],
  envPrefix: ["VITE_", "CONTENTFUL_"],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/lib", import.meta.url)),
    },
  },
});
