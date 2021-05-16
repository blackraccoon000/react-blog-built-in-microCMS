import React from 'react';
import HeaderTurquoiseBlue from '../../components/L3_Organisms/HeaderTurquoiseBlue';

export default {
  title: 'L3_Organisms/HeaderTurquoiseBlue',
  component: HeaderTurquoiseBlue,
  argTypes: {
    position: {
      options: ["relative","fixed"],
      control: { type: 'select' }
    },
    racSize: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 10,
        default: 60,
      },
    },
    iconSize: {
      control: {
        type: 'range',
        min: 10,
        max: 50,
        step: 1,
        default: 30,
      },
    },
    logoHeight: {
      control: {
        type: 'range',
        min: 10,
        max: 50,
        step: 10,
        default: 30,
      },
    },
    logoWidth: {
      control: {
        type: 'range',
        min: 10,
        max: 300,
        step: 10,
        default: 180,
      },
    },
  },
};

const Template = (args) => <HeaderTurquoiseBlue {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Default.args = {
  racSize:60,
  iconSize:30,
  logoHeight:30,
  logoWidth:180
};

export const Middle = Template.bind({});
Middle.args = {
  racSize:40,
  iconSize:20,
  logoHeight:20,
  logoWidth:120
};

export const Small = Template.bind({});
Small.args = {
  racSize:30,
  iconSize:16,
  logoHeight:20,
  logoWidth:100
};
