import React from 'react';
import SearchForm from '../../components/L2_Molecules/SearchForm';

export default {
  title: 'L2_Molecules/SearchForm',
  component: SearchForm,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'SearchForm';
      return (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            height: 200,
            top: 0,
            left: 0,
            width: 300,
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  flag: true,
};
