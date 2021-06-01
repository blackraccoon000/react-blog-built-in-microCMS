import React from 'react';
import { ArticleCardList } from '../../components/L5_Pages/ArticleCardList';

export default {
  title: 'L5_Pages/ArticleCardList',
  component: ArticleCardList,
};

const Template = (args) => <ArticleCardList {...args} />;
export const Default = Template.bind({});
Default.args = {};
