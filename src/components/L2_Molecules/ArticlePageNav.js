import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 80%;
  display: block;
  margin: calc(68rem / 16) auto;
`;

const UnList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li.attrs((props) => {
  return {
    style: {
      textAlign: `${props.align}`,
    },
  };
})`
  width: 45%;
  line-height: 1.6;
  word-break: break-all;
  font-size: calc(14rem / 16);
`;

const PostTitle = styled.span`
  display: block;
  color: #adaaa5;
  font-weight: 600;
  padding-bottom: calc(8rem / 16);
`;

const StyledLink = styled(Link)``;

const ArticlePageNav = (props) => {
  return (
    <Wrapper>
      <UnList>
        <ListItem align="left">
          {props.prevId !== undefined && (
            <>
              <PostTitle>Prev Post</PostTitle>
              <StyledLink to={`/article/${props.prevId}`}>
                {props.prevTitle}
              </StyledLink>
            </>
          )}
        </ListItem>
        <ListItem align="right">
          {props.nextId !== undefined && (
            <>
              <PostTitle>Next Post</PostTitle>
              <StyledLink to={`/article/${props.nextId}`}>
                {props.nextTitle}
              </StyledLink>
            </>
          )}
        </ListItem>
      </UnList>
    </Wrapper>
  );
};

export default ArticlePageNav;
