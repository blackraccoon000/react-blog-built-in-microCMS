import React from 'react';
import ArticleCardTurquoiseBlue from '../../components/L3_Organisms/ArticleCardTurquoiseBlue';
import ProviderMock from '../../tests/fixtures/ProviderMock';

export default {
  title: 'L3_Organisms/ArticleCardTurquoiseBlue',
  component: ArticleCardTurquoiseBlue,
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

const Template = (args) => <ArticleCardTurquoiseBlue {...args} />;
export const Default = Template.bind({});
Default.args = {};
