import React from 'react';
import HeaderEnd from '../../components/L2_Molecules/HeaderEnd';

export default {
  title: 'L2_Molecules/HeaderEnd',
  component: HeaderEnd,
};

const Template = (args) => <HeaderEnd {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontSize: 13,
  linkArray: [
    { linkPath: '/', linkName: 'home' },
    { linkPath: '/dashboard', linkName: 'dashboard' },
    { linkPath: '/help', linkName: 'help' },
  ],
};
