import { Reset } from 'styled-reset';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: [
      { color: '#ff4785', title: 'Coral' },
      'rgba(0, 159, 183, 1)',
      '#fe4a49',
    ],
  },
};

const decorators = [
  (Story) => (
    <>
      <Reset />
      <Story />
    </>
  ),
];

export { parameters, decorators };
