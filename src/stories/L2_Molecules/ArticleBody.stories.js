import React from 'react';
import ArticleBody from '../../components/L2_Molecules/ArticleBody';

export default {
  title: 'L2_Molecules/ArticleBody',
  component: ArticleBody,
  argTypes: {
    color: {
      control: 'color',
    },
    dateSize: {
      control: {
        type: 'range',
        min: 10,
        max: 50,
        step: 1,
        default: 12,
      },
    },
  },
  decorators: [
    (Story) => {
      Story.displayName = 'ArticleBody';
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fff',
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

const Template = (args) => <ArticleBody {...args} />;

export const Default = Template.bind({});
Default.args = {};
