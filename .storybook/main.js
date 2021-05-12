module.exports = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.mdx',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
  ],
};
