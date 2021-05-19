import React from 'react';
import { IndexTemplate } from '../../components/L4_Templates/IndexTemplate';
import ProviderMock from '../../tests/fixtures/ProviderMock';

export default {
  title: 'L4_Templates/IndexTemplate',
  component: IndexTemplate,
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

const Template = (args) => <IndexTemplate {...args} />;
export const Default = Template.bind({});
Default.args = {};
