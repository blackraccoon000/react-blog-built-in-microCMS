import React from 'react';
import ArticleKeywords from '../../components/L2_Molecules/ArticleKeywords';

export default {
  title: 'L2_Molecules/ArticleKeywords',
  component: ArticleKeywords,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 24,
      },
    },
  },
};

const Template = (args) => <ArticleKeywords {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Keywords = Template.bind({});
Keywords.args = {
  keywords: [
    'あいうえお',
    'かきくけこ',
    'さしすせそ',
    'たちつてと',
    'なにぬねの',
  ],
};
