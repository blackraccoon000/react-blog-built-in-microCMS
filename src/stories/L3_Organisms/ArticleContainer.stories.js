import React from 'react';
import { ArticleContainer } from '../../components/L3_Organisms/ArticleContainer';

export default {
  title: 'L3_Organisms/ArticleContainer',
  component: ArticleContainer,
  argTypes: {},
  decorators: [
    (Story) => {
      Story.displayName = 'ArticleContainer';
      return (
        <div
          style={{
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

const Template = (args) => <ArticleContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
