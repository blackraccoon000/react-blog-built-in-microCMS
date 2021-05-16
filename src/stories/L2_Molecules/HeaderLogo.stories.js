
import React from 'react';
import HeaderLogo from '../../components/L2_Molecules/HeaderLogo';

export default {
  title: 'L2_Molecules/HeaderLogo',
  component: HeaderLogo,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 5,
        max: 100,
        step: 1,
        default: 27,
      },
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 70,
        step: 1,
        default: 52,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 300,
        step: 1,
        default: 180,
      },
    },
  },
};

const Template = (args) => <HeaderLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Red = Template.bind({});
Red.args = {
  color: "#e84141"
};
