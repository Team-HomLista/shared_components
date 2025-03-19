import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: (config) => {
    // Ignore postcss.config.mjs, important fix that causes a SB bug.
    config.css = {
      ...config.css,
      postcss: {
        // Empty configurations for error preventing.
        plugins: [],
      },
    };
    return config;
  },
};

export default config;
