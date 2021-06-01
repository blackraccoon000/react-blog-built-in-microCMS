import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconGitOct from '../L1_Atoms/IconGitOct';
import IconQiita from '../L1_Atoms/IconQiita';
import IconTwitter from '../L1_Atoms/IconTwitter';
import IconYoutube from '../L1_Atoms/IconYoutube';
import IconFacebook from '../L1_Atoms/IconFacebook';
import IconChromatic from '../L1_Atoms/IconChromatic';
import IconMicroCms from '../L1_Atoms/IconMicroCms';
import IconNetlify from '../L1_Atoms/IconNetlify';
import IconAdobe from '../L1_Atoms/IconAdobe';

const UnorderedList = styled.ul.attrs((props) => {
  return {
    style: {
      marginBottom: `${props.margin / 16}rem`,
    },
  };
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0 calc(20rem / 16);

  @media screen and (min-width: 767px) {
    padding: calc(10rem / 16);
  }
`;

const ListItem = styled.li.attrs((props) => {})`
  margin: calc(8rem / 16) calc(30rem / 16) 0 0;

  @media screen and (min-width: 767px) {
    margin: 0 calc(16rem / 16) 0 0;
  }
`;

const QiitaBorder = styled.div.attrs((props) => {
  return {
    style: {
      border: `calc(.2rem/1.6) solid ${props.color}`,
    },
  };
})`
  border-radius: calc(10rem / 16);
  height: calc(11rem / 16);
  padding: calc(5rem / 16) calc(6rem / 16);
  margin-top: calc(3rem / 16);
`;

const FooterIcons = (props) => {
  const { color, margin } = props;
  return (
    <UnorderedList margin={margin}>
      <ListItem>
        <a href="https://qiita.com/whiteraccoon" target="_blank" rel="noopener">
          <QiitaBorder color={color}>
            <IconQiita color={color} />
          </QiitaBorder>
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://twitter.com/yutakaf_0326"
          target="_blank"
          rel="noopener"
        >
          <IconTwitter color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.facebook.com/yutaka.fujii.3979/"
          target="_blank"
          rel="noopener"
        >
          <IconFacebook color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://github.com/blackraccoon000/react-blog-built-in-microCMS"
          target="_blank"
          rel="noopener"
        >
          <IconGitOct color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a
          href="https://www.chromatic.com/library?appId=6099f15c1b8f98003be928e5"
          target="_blank"
          rel="noopener"
        >
          <IconChromatic color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://microcms.io/" target="_blank" rel="noopener">
          <IconMicroCms color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://netlify.com/" target="_blank" rel="noopener">
          <IconNetlify color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://fonts.adobe.com/" target="_blank" rel="noopener">
          <IconAdobe color={color} />
        </a>
      </ListItem>
    </UnorderedList>
  );
};

FooterIcons.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.number,
};

FooterIcons.defaultProps = {
  color: '#586069',
  margin: 10,
};

export default FooterIcons;
