import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = styled.div.attrs((props) => {
  return {
    style: {
      order: `${props.order}`,
    },
  };
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Category = styled.span.attrs((props) => {
  return {
    style: {
      border: `calc(1rem/16) solid ${props.color}`,
      color: `${props.color}`,
      margin: `${props.margin}`,
      fontSize: `calc(${props.fontSize / 16}rem)`,
    },
  };
})`
  padding: calc(2rem / 16) calc(8rem / 16);
  white-space: nowrap;
  border-radius: calc(3rem / 16);
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
`;

/**
 * [,]区切りのキーワードをコンポーネント化する。
 */
const ArticleKeywords = (props) => {
  return (
    <Article order={props.order}>
      {props.keywords.map((keyword, num) => {
        return (
          <Category key={`${keyword}_${num}`} {...props}>
            <StyledLink to={`category/${keyword}`} color={props.color}>
              {keyword}
            </StyledLink>
          </Category>
        );
      })}
    </Article>
  );
};

ArticleKeywords.propTypes = {
  /**
   * 文字色/枠線を変更
   */
  color: PropTypes.string,
  /**
   * キーワードは配列形式で複数記載できる。
   */
  keywords: PropTypes.array,
  /**
   * 枠と枠の間の間隔を決める。
   */
  margin: PropTypes.string,
  /**
   * キーワード枠の全体幅を決める。
   */
  order: PropTypes.number,
  fontSize: PropTypes.number,
};

ArticleKeywords.defaultProps = {
  color: '#787878',
  fontSize: 11,
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  margin: 'calc(10rem/16) calc(7rem/16) calc(2rem/16)',
  order: 0,
};

export default ArticleKeywords;
