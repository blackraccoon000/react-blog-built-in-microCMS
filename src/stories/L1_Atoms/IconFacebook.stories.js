import React from 'react';
import IconFacebook from '../../components/L1_Atoms/IconFacebook';

export default {
  title: 'L1_ATOMS/IconFacebook',
  component: IconFacebook,
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
        default: 24,
      },
    },
    width: {
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

const Template = (args) => <IconFacebook {...args} />;

export const Default = Template.bind({});
Default.args = {};
