import React from 'react';
import { hrefTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';
import FooterItems from '../../components/L2_Molecules/FooterItems';

export default {
  title: 'L2_Molecules/FooterItems',
  component: FooterItems,
  argTypes: {
    flag: false,
  },
  decorators: [
    (Story) => {
      Story.displayName = 'FooterItems';
      return (
        <div
          style={{
            backgroundColor: '#e6cccc8a',
            width: '1500px',
            height: '500px',
            margin: '0 auto',
            padding: '50px 50px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
};

const Template = (args) => <FooterItems {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Link = Template.bind({});
Link.args = {
  linkList: [
    {
      link: 'https://blog.playwell.site/home',
      linkLabel: '© 2021 PlayWell,Inc',
      ga: 'Footer, go to home, text:home',
    },
    {
      link: 'https://blog.playwell.site/terms',
      linkLabel: 'Terms',
      ga: 'Footer, go to terms, text:terms',
    },
    {
      link: 'https://blog.playwell.site/privacy',
      linkLabel: 'Privacy',
      ga: 'Footer, go to privacy, text:privacy',
    },
    {
      link: 'https://blog.playwell.site/sitemap',
      linkLabel: 'Site Map',
      ga: 'Footer, go to site map, text:sitemap',
    },
    {
      link: 'https://blog.playwell.site/whatsplaywell',
      linkLabel: 'What is PlayWell?',
      ga: 'Footer, go to what is PlayWell?, text:play well?',
    },
  ],
};
