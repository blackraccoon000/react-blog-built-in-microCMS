
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

export const Large = Template.bind({});
Large.args = {
  color: "#e84141",
  height: 30,
  size: 60,
  width: 180,
};

export const Middle = Template.bind({});
Middle.args = {
  color: "#e84141",
  height: 20,
  size: 40,
  width: 120,

};

export const Small = Template.bind({});
Small.args = {
  color: "#e84141",
  height: 20,
  size: 30,
  width: 100,
};
