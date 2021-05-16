import React from 'react';
import SummaryDetails from '../../components/L2_Molecules/SummaryDetails';

export default {
  title: 'L2_Molecules/SummaryDetails',
  component: SummaryDetails,
  argTypes: {
    flag: false,
  },
};

const Template = (args) => <SummaryDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  summaryLabel: 'Whats PlayWell?',
  someLinks: [
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

export const LongLabeling = Template.bind({});
LongLabeling.args = {
  summaryLabel: 'Whats PlayWell?',
  someLinks: [
    {
      link: '#',
      linkLabel: 'Long Name Labeling...aaaaaaaaa',
    },
    {
      link: '#',
      linkLabel: 'Long Name Labeling...sssssss',
    },
    {
      link: '#',
      linkLabel: 'Long Name Labeling...dddddddddddddd',
    },
  ],
};
