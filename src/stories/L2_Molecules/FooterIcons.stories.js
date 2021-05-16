import React from 'react';
import FooterIcons from '../../components/L2_Molecules/FooterIcons';

export default {
  title: 'L2_Molecules/FooterIcons',
  component: FooterIcons,
  argTypes: {
    flag: false,
  },
};

const Template = (args) => <FooterIcons {...args} />;

export const Default = Template.bind({});
Default.args = {};
