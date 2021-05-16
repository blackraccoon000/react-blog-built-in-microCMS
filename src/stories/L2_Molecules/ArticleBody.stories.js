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
};

const Template = (args) => <ArticleBody {...args} />;

export const Default = Template.bind({});
Default.args = {};
