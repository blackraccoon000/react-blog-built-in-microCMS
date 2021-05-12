import React from 'react';
import IconQiita from '../../components/L1_Atoms/IconQiita';

export default {
  title: 'L1_ATOMS/IconQiita',
  component: IconQiita,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 12,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 34,
      },
    },
  },
};

const Template = (args) => <IconQiita {...args} />;

export const Default = Template.bind({});
Default.args = {};
