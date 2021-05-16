import React from 'react';
import HeaderContainer from '../../components/L3_Organisms/HeaderContainer';

export default {
  title: 'L3_Organisms/HeaderContainer',
  component: HeaderContainer,
  argTypes: {
    position: {
      options: ["relative","fixed"],
      control: { type: 'select' }
    }
  },
};

const Template = (args) => <HeaderContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
