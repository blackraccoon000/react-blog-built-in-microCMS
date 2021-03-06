import React from 'react';
import IconRac from '../../components/L1_Atoms/IconRac';

export default {
  title: 'L1_Atoms/IconRac',
  component: IconRac,
  argTypes: {
    flag: true,
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 10,
        default: 30,
      },
    },
  },
};

const Template = (args) => <IconRac {...args} />;

export const Default = Template.bind({});
Default.args = {};
