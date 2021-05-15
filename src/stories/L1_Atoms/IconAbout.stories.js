import React from 'react';
import IconAbout from '../../components/L1_Atoms/IconAbout';

export default {
  title: 'L1_Atoms/IconAbout',
  component: IconAbout,
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

const Template = (args) => <IconAbout {...args} />;

export const Default = Template.bind({});
Default.args = {};
