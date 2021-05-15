import React from 'react';
import ArticleTitle from '../../components/L2_Molecules/ArticleTitle';

export default {
  title: 'L2_Molecules/ArticleTitle',
  component: ArticleTitle,
  argTypes: {
    color: {
      control: 'color',
    },
    titleSize: {
      control: {
        type: 'range',
        min: 10,
        max: 50,
        step: 1,
        default: 25,
      },
    },
  },
  decorators: [
    (Story) => {
      Story.displayName = 'ArticleTitle';
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


const Template = (args) => <ArticleTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};
