import React from 'react';
import ViewButton from '../../components/L1_Atoms/ViewButton';

export default {
  title: 'L1_Atoms/ViewButton',
  component: ViewButton,
  argTypes: {
    color: {
      control: "color"
    },
  },
};

const Template = (args) => <ViewButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
