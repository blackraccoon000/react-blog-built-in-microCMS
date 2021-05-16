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
        default: 20,
      },
    },
  },
};

const Template = (args) => <IconAbout {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  size:30
};

export const Middle = Template.bind({});
Middle.args = {
  size:20
};

export const Small = Template.bind({});
Small.args = {
  size:16
};
