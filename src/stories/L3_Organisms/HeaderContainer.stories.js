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
  decorators: [
    (Story) => {
      Story.displayName = 'HeaderContainer';
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#e5e5e5',
            width: 'auto',
            height: '1800px',
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

const Template = (args) => <HeaderContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
