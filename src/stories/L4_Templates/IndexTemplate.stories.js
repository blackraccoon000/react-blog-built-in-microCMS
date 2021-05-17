import React from 'react';
import IndexTemplate from '../../components/L4_Templates/IndexTemplate';

export default {
  title: 'L4_Templates/IndexTemplate',
  component: IndexTemplate,
};

const Template = (args) => <IndexTemplate {...args} />;
export const Default = Template.bind({});
Default.args = {};
