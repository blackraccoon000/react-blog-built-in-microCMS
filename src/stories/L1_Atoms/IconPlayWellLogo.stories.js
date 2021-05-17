import React from 'react';
import IconPlayWellLogo from '../../components/L1_Atoms/IconPlayWellLogo';
import { MemoryRouter } from 'react-router';

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
  // decorators: [
  //   (Story) => {
  //     return (
  //       <MemoryRouter initialEntries={['/']}>
  //         <Story />
  //       </MemoryRouter>
  //     );
  //   },
  // ],
};

const Template = (args) => <IconPlayWellLogo {...args} />;

export const Default_White = Template.bind({});
Default_White.args = {
  color: '#fff',
};

export const Red = Template.bind({});
Red.args = {
  color: '#e84141',
};
