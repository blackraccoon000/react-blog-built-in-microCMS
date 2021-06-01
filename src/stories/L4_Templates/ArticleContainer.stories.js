import React from 'react';
import { ArticleContainer } from '../../components/L4_Templates/ArticleContainer';

export default {
  title: 'L4_Templates/ArticleContainer',
  component: ArticleContainer,
  argTypes: {},
};

const Template = (args) => <ArticleContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
