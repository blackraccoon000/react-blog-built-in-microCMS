import React from 'react';
import ArticleTitle from '../../components/L2_Molecules/ArticleTitle';

export default {
  title: 'L2_Molecules/ArticleTitle',
  component: ArticleTitle,
  argTypes: {
    color: {
      control: 'color',
    },
    titleFontSize: {
      control: {
        type: 'range',
        min: 10,
        max: 50,
        step: 1,
        default: 25,
      },
    },
  },
};


const Template = (args) => <ArticleTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};
