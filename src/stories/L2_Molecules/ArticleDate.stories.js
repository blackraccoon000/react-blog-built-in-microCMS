import React from 'react';
import ArticleDate from '../../components/L2_Molecules/ArticleDate';

export default {
  title: 'L2_Molecules/ArticleDate',
  component: ArticleDate,
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

const Template = (args) => <ArticleDate {...args} />;

export const Default = Template.bind({});
Default.args = {};
