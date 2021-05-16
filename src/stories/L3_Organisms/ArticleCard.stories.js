import React from 'react';
import ArticleCard from '../../components/L3_Organisms/ArticleCard';

export default {
  title: 'L3_Organisms/ArticleCard',
  component: ArticleCard,
};

const Template = (args) => <ArticleCard {...args} />;
export const Default = Template.bind({});
Default.args = {};
