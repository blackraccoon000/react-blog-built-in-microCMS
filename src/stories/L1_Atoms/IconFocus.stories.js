import React from 'react';
import IconFocus from '../../components/L1_Atoms/IconFocus';

export default {
  title: 'L1_Atoms/IconFocus',
  component: IconFocus,
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

const Template = (args) => <IconFocus {...args} />;

export const Default = Template.bind({});
Default.args = {
  flag: true,
  link:"/search"
};

export const NoLink = Template.bind({});
NoLink.args = {
  flag: false,
};
