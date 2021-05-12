import React from 'react';
import SummaryDetails from '../../components/L2_Molecules/SummaryDetails';

export default {
  title: 'L2_Molecules/SummaryDetails',
  component: SummaryDetails,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'SummaryDetails';
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <SummaryDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  summaryLabel: 'Whats PlayWell?',
  someLink: [
    {
      link: '#',
      linkLabel: 'Link α',
    },
    {
      link: '#',
      linkLabel: 'Link β',
    },
    {
      link: '#',
      linkLabel: 'Link γ',
    },
  ],
};
