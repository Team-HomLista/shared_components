// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    // app stories
    path.join(process.cwd(), 'src/**/*.mdx'),
    path.join(process.cwd(), 'src/**/*.stories.@(js|jsx|ts|tsx)'),
    // shared submodule stories
    path.join(process.cwd(), 'src/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)'),
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: { name: '@storybook/react-vite', options: {} },

  // ⬇️ This is the key part: alias the local package name to the folder.
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@team-homlista/shared_components': path.resolve(process.cwd(), 'src/shared'),
    };
    // Ensure deps from shared compile when imported from the linked package
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: [
        ...(config.optimizeDeps?.include || []),
      ],
    };
    return config;
  },

  docs: { autodocs: 'tag' },
};

export default config;