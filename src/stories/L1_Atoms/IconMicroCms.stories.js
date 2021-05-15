import React from 'react';
import IconMicroCms from '../../components/L1_Atoms/IconMicroCms';

export default {
  title: 'L1_Atoms/IconMicroCms',
  component: IconMicroCms,
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

const Template = (args) => <IconMicroCms {...args} />;

export const Default = Template.bind({});
Default.args = {};
