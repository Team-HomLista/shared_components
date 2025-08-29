import type { StorybookConfig } from "@storybook/react-vite";
import * as viteTsconfigDefault from "vite-tsconfig-paths";
const tsconfigPaths = viteTsconfigDefault.default;

const config: StorybookConfig = {
  stories: [
    // App stories
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",

    // Shared submodule stories (adjust the relative path if your .storybook lives elsewhere)
    "../src/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  staticDirs: ["../public"],

  viteFinal(config) {
    // Ensure TS path aliases resolve across the repo (helps with imports from the submodule)
    config.plugins = [...(config.plugins || []), tsconfigPaths()];
    return config;
  },

  docs: {}
};
export default config;