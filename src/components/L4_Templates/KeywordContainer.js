import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleBody from '../L2_Molecules/ArticleBody';
import ArticleImg from '../L2_Molecules/ArticleImg';
import ArticlePageNav from '../L2_Molecules/ArticlePageNav';
import KeywordWrapper from '../L3_Organisms/KeywordWrapper';
import KeywordLinkIdList from '../L3_Organisms/KeywordLinkIdList';

/**
 * 各Componentを統合するWrapper
 */
const Wrapper = styled.div`
  background-color: #61b1c8;
`;

const Container = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fbfbf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(800rem / 16);
  margin: 0 auto;
`;

const Comment = styled.div`
  text-align: center;
  color: #000;
  font-family: kan415typos-std;
  font-size: calc(20rem / 16);
`;

/**
 * ブログの記事を表示する。
 */
const KeywordContainer = (props) => {
  document.title = 'Keywordを含む記事を表示';
  return (
    <Wrapper>
      <Container>
        <KeywordWrapper {...props} />
        <Comment>Keywordを含む記事を表示</Comment>
        <KeywordLinkIdList {...props} />
      </Container>
    </Wrapper>
  );
};

KeywordContainer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

/**
 * Storybook用、通常の動作では表示されない。
 */
KeywordContainer.defaultProps = {
  title: 'Loading...',
  src:
    'https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/2687c64d1e7e4a8b8fef792ff909ea81/cat_four.jpg',
};

/**
 * KeywordContainerでは、
 * 上位Router側からstate情報が格納されていない場合には
 * mapStateToPropsは満たされない設定になっている。
 */
const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  const id = ownProps.computedMatch.params.id;
  const article = articles.find((article) => article.id === id);
  const src = article !== undefined ? article.thumbnail.src : '';
  const title = article !== undefined ? article.title : '';

  return {
    // articles,
    views,
    // article,
    title,
    src,
  };
};

export default connect(mapStateToProps)(KeywordContainer);
export { KeywordContainer };
