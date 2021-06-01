import React from 'react';
import { KeywordContainer } from '../../components/L4_Templates/KeywordContainer';

export default {
  title: 'L4_Templates/KeywordContainer',
  component: KeywordContainer,
  argTypes: {},
};

const Template = (args) => <KeywordContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
