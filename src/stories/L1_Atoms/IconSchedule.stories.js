import React from 'react';
import IconSchedule from '../../components/L1_Atoms/IconSchedule';

export default {
  title: 'L1_Atoms/IconSchedule',
  component: IconSchedule,
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
        default: 24,
      },
    },
  },
};

const Template = (args) => <IconSchedule {...args} />;

export const Default = Template.bind({});
Default.args = {};
