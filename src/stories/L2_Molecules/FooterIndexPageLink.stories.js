import React from 'react';
import { FooterIndexPageLink } from '../../components/L2_Molecules/FooterIndexPageLink';

export default {
  title: 'L2_Molecules/FooterIndexPageLink',
  component: FooterIndexPageLink,
  argTypes: {
    viewsUpdater: { action: 'clicked' },
  },
};

const Template = (args) => <FooterIndexPageLink {...args} />;

export const Default = Template.bind({});
Default.args = {};
