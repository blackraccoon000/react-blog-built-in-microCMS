import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconGitOct from '../L1_Atoms/IconGitOct';
import IconQiita from '../L1_Atoms/IconQiita';
import IconTwitter from '../L1_Atoms/IconTwitter';
import IconYoutube from '../L1_Atoms/IconYoutube';
import IconFacebook from '../L1_Atoms/IconFacebook';
import IconChromatic from "../L1_Atoms/IconChromatic"
import IconMicroCms from "../L1_Atoms/IconMicroCms"
import IconAdobe from "../L1_Atoms/IconAdobe"

const UnorderedList = styled.ul.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: calc(1rem/1.6);
`;

const ListItem = styled.li.attrs((props) => {})`
  margin-right: calc(1.6rem/1.6);
`;

const QiitaBorder = styled.div.attrs((props) => {
  return {
    style: {
      border: `calc(.2rem/1.6) solid ${props.color}`,
    },
  };
})`
  border-radius: calc(1rem/1.6);
  height: calc(1.1rem/1.6);
  padding: calc(.5rem/1.6) calc(.6rem/1.6);
  margin-top: calc(.3rem/1.6);
`;

const FooterIcons = (props) => {
  const { color } = props;
  return (
    <UnorderedList>
      <ListItem>
        <a href="https://qiita.com/whiteraccoon">
          <QiitaBorder color={color}>
            <IconQiita color={color} />
          </QiitaBorder>
        </a>
      </ListItem>
      <ListItem>
        <a href="https://twitter.com/yutakaf_0326">
          <IconTwitter color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.facebook.com/yutaka.fujii.3979/">
          <IconFacebook color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://github.com/blackraccoon000/react-blog-built-in-microCMS">
          <IconGitOct color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.chromatic.com/library?appId=6099f15c1b8f98003be928e5">
          <IconChromatic color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://microcms.io/">
          <IconMicroCms color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://fonts.adobe.com/">
          <IconAdobe color={color} />
        </a>
      </ListItem>
    </UnorderedList>
  );
};

FooterIcons.propTypes = {
  color: PropTypes.string,
};

FooterIcons.defaultProps = {
  color: '#586069',
};

export default FooterIcons;
