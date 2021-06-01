import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
      {props.articleIndex !== -1 && (
        <UnList>
          <ListItem align="left">
            <PostTitle>Prev Post</PostTitle>
            <StyledLink to={`/article/${props.prev.id}`}>
              {props.prev.title}
            </StyledLink>
          </ListItem>
          <ListItem align="right">
            <PostTitle>Next Post</PostTitle>
            <StyledLink to={`/article/${props.next.id}`}>
              {props.next.title}
            </StyledLink>
          </ListItem>
        </UnList>
      )}
    </Wrapper>
  );
};

ArticlePageNav.propTypes = {
  articleIndex: PropTypes.number,
  prev: PropTypes.object,
  next: PropTypes.object,
};

/**
 * Storybook用、通常の動作では表示されない。
 */
ArticlePageNav.defaultProps = {
  articleIndex: -1,
  prev: { id: '', title: '' },
  next: { id: '', title: '' },
};

const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  const id =
    ownProps.computedMatch !== undefined
      ? ownProps.computedMatch.params.id
      : '';
  const articleIndex = articles.findIndex((article) => article.id === id);
  const prev =
    articleIndex === -1
      ? undefined
      : articleIndex === 0
      ? undefined
      : articles[articleIndex - 1];
  const next =
    articleIndex === -1
      ? undefined
      : articleIndex === views.totalCount
      ? undefined
      : articles[articleIndex + 1];

  return {
    articleIndex,
    prev,
    next,
  };
};

export default connect(mapStateToProps)(ArticlePageNav);
export { ArticlePageNav };
