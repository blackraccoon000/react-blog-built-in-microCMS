import React from 'react';
import FooterContainer from '../../components/L3_Organisms/FooterContainer';

export default {
  title: 'L3_Organisms/FooterContainer',
  component: FooterContainer,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'FooterContainer';
      return (
        <div
          style={{
            backgroundColor: '#e6cccc8a',
            width: '1500px',
            height: '500px',
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

const Template = (args) => <FooterContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
