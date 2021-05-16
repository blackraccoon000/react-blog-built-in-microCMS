import React from 'react';
import NavItem from '../../components/L1_Atoms/NavItem';

export default {
  title: 'L1_Atoms/NavItem',
  component: NavItem,
  argTypes: {
    color: {
      control: "color"
    },
  },
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
