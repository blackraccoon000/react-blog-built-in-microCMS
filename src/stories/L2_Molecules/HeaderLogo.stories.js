
import React from 'react';
import HeaderLogo from '../../components/L2_Molecules/HeaderLogo';

export default {
  title: 'L2_Molecules/HeaderLogo',
  component: HeaderLogo,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: {
        type: 'range',
        min: 5,
        max: 100,
        step: 1,
        default: 27,
      },
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 70,
        step: 1,
        default: 52,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 300,
        step: 1,
        default: 180,
      },
    },
  },
  decorators: [
    (Story) => {
      Story.displayName = 'HeaderLogo';
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#e5e5e5',
            width: 'auto',
            height: 'auto',
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

const Template = (args) => <HeaderLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Red = Template.bind({});
Red.args = {
  color: "#e84141"
};
