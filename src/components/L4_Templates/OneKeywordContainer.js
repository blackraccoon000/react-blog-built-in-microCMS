import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleBody from '../L2_Molecules/ArticleBody';
import ArticleImg from '../L2_Molecules/ArticleImg';
import ArticlePageNav from '../L2_Molecules/ArticlePageNav';
import KeywordWrapper from '../L3_Organisms/KeywordWrapper';
import OneKeywordLinkIdList from '../L3_Organisms/OneKeywordLinkIdList';

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

/**
 * ブログの記事を表示する。
 */
const OneKeywordContainer = (props) => {
  document.title = props.title;
  // console.log(props);
  return (
    <Wrapper>
      <Container>
        <KeywordWrapper {...props} />
        <OneKeywordLinkIdList {...props} />
      </Container>
    </Wrapper>
  );
};

OneKeywordContainer.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

/**
 * Storybook用、通常の動作では表示されない。
 */
OneKeywordContainer.defaultProps = {
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
  const title = id;

  return {
    title,
  };
};

export default connect(mapStateToProps)(OneKeywordContainer);
export { OneKeywordContainer };
