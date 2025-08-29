import type { StorybookConfig } from "@storybook/react-vite";
import * as viteTsconfigDefault from "vite-tsconfig-paths";
const tsconfigPaths = viteTsconfigDefault.default;
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    // App stories
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",

    // Monorepo-style packages (if any)
    "../packages/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../libs/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",

    // Git submodules (common locations)
    "../../submodules/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../packages/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
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

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  core: {
    builder: "@storybook/builder-vite"
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()]
    });
  },

  docs: {}
};

export default config;
