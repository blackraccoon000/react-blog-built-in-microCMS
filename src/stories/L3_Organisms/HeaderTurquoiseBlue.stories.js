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
  decorators: [
    (Story) => {
      Story.displayName = 'HeaderTurquoiseBlue';
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            // backgroundColor: '#61b1c8',
            backgroundColor: '#000',
            width: 'auto',
            height: '100vh',
            margin: '0 auto',
            padding: '50px 50px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <HeaderTurquoiseBlue {...args} />;

export const Default = Template.bind({});
Default.args = {};
