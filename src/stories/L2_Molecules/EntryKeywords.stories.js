import React from 'react';
import EntryKeywords from '../../components/L2_Molecules/EntryKeywords';

export default {
  title: 'L2_Molecules/EntryKeywords',
  component: EntryKeywords,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 10,
        default: 24,
      },
    },
  },
};

const Template = (args) => <EntryKeywords {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Keywords = Template.bind({});
Keywords.args = {
  keywords: [
    'あいうえお',
    'かきくけこ',
    'さしすせそ',
    'たちつてと',
    'なにぬねの',
  ],
};
