import React from 'react';
import ArticleCard from '../../components/L3_Organisms/ArticleCard';

export default {
  title: 'L3_Organisms/ArticleCard',
  component: ArticleCard,
  decorators: [
    (Story) => {
      Story.displayName = 'ArticleCard';
      return (
        <div
          style={{
            backgroundColor: '#fff',
            width: 'auto',
            margin: '0 auto',
            padding: '0 5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <ArticleCard {...args} />;
export const Default = Template.bind({});
Default.args = {};
