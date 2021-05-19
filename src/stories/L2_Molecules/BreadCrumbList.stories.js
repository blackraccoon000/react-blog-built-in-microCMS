import React from 'react';
import BreadCrumbList from '../../components/L2_Molecules/BreadCrumbList';

export default {
  title: 'L2_Molecules/BreadCrumbList',
  component: BreadCrumbList,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

const Template = (args) => <BreadCrumbList {...args} />;

export const Default = Template.bind({});
Default.args = {};
