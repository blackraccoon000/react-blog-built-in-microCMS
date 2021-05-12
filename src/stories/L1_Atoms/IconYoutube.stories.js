import React from 'react';
import IconYoutube from '../../components/L1_Atoms/IconYoutube';

export default {
  title: 'L1_Atoms/IconYoutube',
  component: IconYoutube,
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
        default: 22,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 22,
      },
    },
  },
};

const Template = (args) => <IconYoutube {...args} />;

export const Default = Template.bind({});
Default.args = {};
