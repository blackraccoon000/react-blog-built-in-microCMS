import React from 'react';
import { ArticleContainer } from '../../components/L3_Organisms/ArticleContainer';

export default {
  title: 'L3_Organisms/ArticleContainer',
  component: ArticleContainer,
  argTypes: {},
};

const Template = (args) => <ArticleContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
