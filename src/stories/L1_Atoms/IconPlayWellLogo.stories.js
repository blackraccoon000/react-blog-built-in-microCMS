
import React from 'react';
import IconPlayWellLogo from '../../components/L1_Atoms/IconPlayWellLogo';

export default {
  title: 'L1_Atoms/IconPlayWellLogo',
  component: IconPlayWellLogo,
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
        default: 30,
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
      Story.displayName = 'IconPlayWellLogo';
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

const Template = (args) => <IconPlayWellLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Red = Template.bind({});
Red.args = {
  color: "#e84141"
};
