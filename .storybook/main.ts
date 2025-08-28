import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  viteFinal: async (config) => {
    const path = await import('path');
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@shared": path.resolve(__dirname, "../src/shared"),
    };
    
    // Override PostCSS config for Storybook
    config.css = config.css || {};
    config.css.postcss = {
      plugins: []
    };
    
    return config;
  },

  docs: {}
};

export default config;
