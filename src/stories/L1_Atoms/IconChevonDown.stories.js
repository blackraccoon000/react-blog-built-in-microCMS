import React from 'react';
import IconChevonDown from '../../components/L1_Atoms/IconChevonDown';

export default {
  title: 'L1_Atoms/IconChevonDown',
  component: IconChevonDown,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 5,
        max: 20,
        step: 1,
        default: 8,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 20,
        step: 1,
        default: 15,
      },
    },
  },
};

const Template = (args) => <IconChevonDown {...args} />;

export const Default = Template.bind({});
Default.args = {};
