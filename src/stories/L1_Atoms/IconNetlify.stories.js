import React from 'react';
import IconNetlify from '../../components/L1_Atoms/IconNetlify';

export default {
  title: 'L1_Atoms/IconNetlify',
  component: IconNetlify,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 5,
        max: 80,
        step: 1,
        default: 20,
      },
    },
  },
};

const Template = (args) => <IconNetlify {...args} />;

export const Default = Template.bind({});
Default.args = {};
