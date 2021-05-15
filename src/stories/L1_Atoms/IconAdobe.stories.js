import React from 'react';
import IconAdobe from '../../components/L1_Atoms/IconAdobe';

export default {
  title: 'L1_Atoms/IconAdobe',
  component: IconAdobe,
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
        default: 22,
      },
    },
  },
};

const Template = (args) => <IconAdobe {...args} />;

export const Default = Template.bind({});
Default.args = {};
