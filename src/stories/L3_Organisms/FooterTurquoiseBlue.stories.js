import React from 'react';
import { FooterTurquoiseBlue } from '../../components/L3_Organisms/FooterTurquoiseBlue';
import ProviderMock from '../../tests/fixtures/ProviderMock';

export default {
  title: 'L3_Organisms/FooterTurquoiseBlue',
  component: FooterTurquoiseBlue,
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <ProviderMock>
          <Story />
        </ProviderMock>
      );
    },
  ],
};

const Template = (args) => <FooterTurquoiseBlue {...args} />;

export const Default = Template.bind({});
Default.args = {};
