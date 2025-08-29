import type { StorybookConfig } from "@storybook/react-vite";
import * as viteTsconfigDefault from "vite-tsconfig-paths";
import { resolve } from "path";

const tsconfigPaths = viteTsconfigDefault.default;

const config: StorybookConfig = {
  stories: [
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

  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins || []), tsconfigPaths()],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@": resolve(__dirname, "../src"),
          "@shared": resolve(__dirname, "../src/shared"),
        },
      },
    };
  },

  docs: {}
};

export default config;