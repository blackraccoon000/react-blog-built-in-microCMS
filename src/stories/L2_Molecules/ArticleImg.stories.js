import React from 'react';
import ArticleImg from '../../components/L2_Molecules/ArticleImg';

export default {
  title: 'L2_Molecules/ArticleImg',
  component: ArticleImg,
  argTypes: {
    radius: {
      control: {
        type: 'range',
        min: 2,
        max: 30,
        step: 2,
        default: 10,
      },
    },
  },
  decorators: [
    (Story) => {
      Story.displayName = 'ArticleImg';
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

const Template = (args) => <ArticleImg {...args} />;

export const Default = Template.bind({});
Default.args = {};
