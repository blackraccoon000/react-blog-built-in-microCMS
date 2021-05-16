import React from 'react';
import HeaderTurquoiseBlue from '../../components/L3_Organisms/HeaderTurquoiseBlue';

export default {
  title: 'L3_Organisms/HeaderTurquoiseBlue',
  component: HeaderTurquoiseBlue,
  argTypes: {
    position: {
      options: ["relative","fixed"],
      control: { type: 'select' }
    }
  },
};

const Template = (args) => <HeaderTurquoiseBlue {...args} />;

export const Default = Template.bind({});
Default.args = {};
