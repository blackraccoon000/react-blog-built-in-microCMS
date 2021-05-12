import React from 'react';
import IconTwitter from '../../components/L1_Atoms/IconTwitter';

export default {
  title: 'L1_Atoms/IconTwitter',
  component: IconTwitter,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 20,
      },
    },
    width: {
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

const Template = (args) => <IconTwitter {...args} />;

export const Default = Template.bind({});
Default.args = {};
