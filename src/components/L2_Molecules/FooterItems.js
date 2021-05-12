import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
    dataGaClick: `${props.ga}`,
  };
})`
  color: #586069;
  font-size: 12px;
`;

const UnorderedList = styled.ul.attrs((props) => {})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin-left: 30px;
`;

const ListItem = styled.li.attrs((props) => {})`
  margin-right: 20px;
`;

const FooterItems = (props) => {
  return (
    <UnorderedList>
      {props.linkList.map((linkItem) => {
        return (
          <ListItem key={`li_${linkItem.linkLabel}`}>
            <Link
              key={`link_${linkItem.linkLabel}`}
              link={linkItem.link}
              ga={linkItem.ga}
            >
              {linkItem.linkLabel}
            </Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

FooterItems.propTypes = {
  /**
   * linkList内部にて指定する。
   * storybook内部ではActionsを利用してどこにLinkされているか表示したいができない。
   */
  link: PropTypes.string,
  linkLabel: PropTypes.string,
  ga: PropTypes.string,
  linkList: PropTypes.array,
};

FooterItems.defaultProps = {
  linkList: [
    {
      link: '#',
      linkLabel: '© 2021 PlayWell,Inc',
      ga: 'Footer, go to home, text:home',
    },
    {
      link: '#',
      linkLabel: 'Terms',
      ga: 'Footer, go to terms, text:terms',
    },
    {
      link: '#',
      linkLabel: 'Privacy',
      ga: 'Footer, go to privacy, text:privacy',
    },
    {
      link: '#',
      linkLabel: 'Site Map',
      ga: 'Footer, go to site map, text:sitemap',
    },
    {
      link: '#',
      linkLabel: 'What is PlayWell?',
      ga: 'Footer, go to what is PlayWell?, text:play well?',
    },
  ],
};

export default FooterItems;
