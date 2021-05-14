import React from 'react';
import IconChromatic from '../../components/L1_Atoms/IconChromatic';

export default {
  title: 'L1_Atoms/IconChromatic',
  component: IconChromatic,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 5,
        max: 20,
        step: 1,
        default: 8,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 20,
        step: 1,
        default: 15,
      },
    },
  },
};

const Template = (args) => <IconChromatic {...args} />;

export const Default = Template.bind({});
Default.args = {};
