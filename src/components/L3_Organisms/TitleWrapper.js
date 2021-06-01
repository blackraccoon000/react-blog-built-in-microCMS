import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleTitle from '../L2_Molecules/ArticleTitle';
import ArticleDate from '../L2_Molecules/ArticleDate';
import BreadCrumbList from '../L2_Molecules/BreadCrumbList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 750px;
`;

const TitleWrapper = (props) => {
  return (
    <Wrapper>
      <BreadCrumbList
        color="#61b1c8"
        keywords={props.keywords}
        title={props.title}
      />
      <ArticleTitle
        flag={false}
        title={props.title}
        titleMargin={props.titleMargin}
        titlePadding={props.titlePadding}
      />
      <ArticleDate
        scheduleSize={props.size}
        dateFontSize={props.size}
        dateMargin={props.dateMargin}
        updateSize={props.size}
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
      />
    </Wrapper>
  );
};

TitleWrapper.propTypes = {
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
   * L2_Molecules/ArticleImg
   * ブログのトップイメージのソースURLを指定する。
   */
  size: PropTypes.number,
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
  dateMargin: PropTypes.string,
  titleMargin: PropTypes.string,
  titlePadding: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};

/**
 * Storybook用、通常の動作では表示されない。
 */
TitleWrapper.defaultProps = {
  title: 'Article Title',
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  createdAt: '2021-05-02T07:38:52.010Z',
  updatedAt: '2021-05-11T07:32:08.904Z',
  size: 12,
  dateMargin: 'calc(15rem/16) auto 0 calc(10rem/16)',
  titleMargin: '0',
  titlePadding: '0 0 calc(6rem / 16) calc(10rem / 16)',
  link: '#',
  body: undefined,
  bgColor: 'none',
};

const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  const id =
    ownProps.computedMatch !== undefined
      ? ownProps.computedMatch.params.id
      : '';
  const article = articles.find((article) => article.id === id);

  const { title, keywords, createdAt, updatedAt } =
    article === undefined
      ? { title: '', keywords: [], createdAt: '', updatedAt: '' }
      : { ...article, keywords: article.keyword.split(',') };

  return {
    id,
    title,
    keywords,
    createdAt,
    updatedAt,
  };
};

export default connect(mapStateToProps)(TitleWrapper);
export { TitleWrapper };
