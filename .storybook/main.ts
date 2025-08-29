import type { StorybookConfig } from "@storybook/react-vite";
import * as viteTsconfigDefault from 'vite-tsconfig-paths';
const tsconfigPaths = viteTsconfigDefault.default;
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/shared/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.mdx"
  ],

  addons: [
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },

  docs: {}
};

export default config;
