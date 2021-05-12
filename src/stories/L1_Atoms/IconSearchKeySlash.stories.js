import React from 'react';
import IconSearchKeySlash from '../../components/L1_Atoms/IconSearchKeySlash';

export default {
  title: 'L1_Atoms/IconSearchKeySlash',
  component: IconSearchKeySlash,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 20,
      },
    },
  },
};

const Template = (args) => <IconSearchKeySlash {...args} />;

export const Default = Template.bind({});
Default.args = {};
