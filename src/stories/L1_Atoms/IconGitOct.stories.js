import React from 'react';
import IconGitOct from '../../components/L1_Atoms/IconGitOct';

export default {
  title: 'L1_ATOMS/IconGitOct',
  component: IconGitOct,
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

const Template = (args) => <IconGitOct {...args} />;

export const Default = Template.bind({});
Default.args = {};
