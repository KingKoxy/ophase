const { svelte } = require("@sveltejs/vite-plugin-svelte");
const WindiCSS = require("vite-plugin-windicss").default;

const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require("path");
const preprocess = require("svelte-preprocess");

module.exports = {
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [WindiCSS()],
    });
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
  ],
  framework: "@storybook/svelte",
  core: {
    builder: "@storybook/builder-vite",
  },
  svelteOptions: {
    preprocess: preprocess({
      typescript: true,
    }),
  },
  /*"features": {
              "storyStoreV7": true
            }*/
};
