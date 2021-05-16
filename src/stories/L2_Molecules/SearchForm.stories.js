import React from 'react';
import SearchForm from '../../components/L2_Molecules/SearchForm';

export default {
  title: 'L2_Molecules/SearchForm',
  component: SearchForm,
  argTypes: {
    flag: false,
  },
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  flag: false,
};
