import React from 'react';
import IconUpdateSymbol from '../../components/L1_Atoms/IconUpdateSymbol';

export default {
  title: 'L1_Atoms/IconUpdateSymbol',
  component: IconUpdateSymbol,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 5,
        max: 50,
        step: 1,
        default: 30,
      },
    },
  },
};

const Template = (args) => <IconUpdateSymbol {...args} />;

export const Default = Template.bind({});
Default.args = {};
