import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleBody from '../L2_Molecules/ArticleBody';
import ArticleDate from '../L2_Molecules/ArticleDate';
import ArticleImg from '../L2_Molecules/ArticleImg';
import ArticleKeywords from '../L2_Molecules/ArticleKeywords';
import ArticleTitle from '../L2_Molecules/ArticleTitle';

import { blogDataSecond } from '../../tests/fixtures/bodyData';
/**
 * 各Componentを統合するWrapper
 */
const ArticleWrapper = styled.div.attrs((props) => {})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 600px;
  max-width: 1200px;
  margin: 90px auto;
`;
/**
 * ブログの記事を表示する。
 */
const ArticleContainer = (props) => {
  // console.log(props);
  return (
    <ArticleWrapper>
      <ArticleTitle title={props.title} link={props.link} />
      <ArticleKeywords keywords={props.keywords} />
      <ArticleDate createdAt={props.createdAt} updatedAt={props.updatedAt} />
      <ArticleImg src={props.src} link={props.link} />
      <ArticleBody body={props.body} />
    </ArticleWrapper>
  );
};

ArticleContainer.propTypes = {
  /**
   * L2_Molecules/ArticleTitle
   * ブログのタイトルを記載する。（一行）
   */
  title: PropTypes.string,
  /**
   * L2_Molecules/Keywords
   * ブログのキーワードを記載する。
   */
  keywords: PropTypes.array,
  /**
   * L2_Molecules/ArticleDate
   * ブログの作製日時を記載する。
   */
  createdAt: PropTypes.string,
  /**
   * L2_Molecules/ArticleDate
   * ブログの更新日時を記載する。
   */
  updatedAt: PropTypes.string,
  /**
   * L2_Molecules/ArticleImg
   * ブログのトップイメージのソースURLを指定する。
   */
  src: PropTypes.string,
  /**
   * L2_Molecules/ArticleTitle・ArticleImg
   * ブログのタイトルもしくはトップイメージをクリックした際のリンク先URLを貼る。
   */
  link: PropTypes.string,
  /**
   * L2_Molecules/ArticleBody
   * ブログ本文を参照する。htmlベースで1行
   */
  body: PropTypes.string,
};

/**
 * Storybook用、通常の動作では表示されない。
 */
ArticleContainer.defaultProps = {
  title: 'Article Title',
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  createdAt: '2021-05-02T07:38:52.010Z',
  updatedAt: '2021-05-11T07:32:08.904Z',
  src:
    'https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/2687c64d1e7e4a8b8fef792ff909ea81/cat_four.jpg',
  link: '#',
  body: blogDataSecond,
};

/**
 * ArticleContainerでは、
 * 上位Router側からstate情報が格納されていない場合には
 * mapStateToPropsは満たされない設定になっている。
 */
const mapStateToProps = (state, ownProps) => {
  const pageData = state.pages.find(
    (page) => page.id === ownProps.match.params.id
  );
  return {
    pages: state.pages,
    pageData: pageData,
    id: pageData.id,
    title: pageData.title,
    keywords: pageData.keywords,
    createdAt: pageData.createdAt,
    updatedAt: pageData.updatedAt,
    src: pageData.thumbnail.url,
    link: pageData.link,
    body: pageData.body,
  };
};

export default connect(mapStateToProps)(ArticleContainer);
export { ArticleContainer };
