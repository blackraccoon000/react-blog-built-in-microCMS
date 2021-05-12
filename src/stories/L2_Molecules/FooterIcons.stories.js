import React from 'react';
import FooterIcons from '../../components/L2_Molecules/FooterIcons';

export default {
  title: 'L2_Molecules/FooterIcons',
  component: FooterIcons,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'FooterIcons';
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

const Template = (args) => <FooterIcons {...args} />;

export const Default = Template.bind({});
Default.args = {};
