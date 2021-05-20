import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleBody from '../L2_Molecules/ArticleBody';
import ArticleDate from '../L2_Molecules/ArticleDate';
import ArticleImg from '../L2_Molecules/ArticleImg';
import ArticleKeywords from '../L2_Molecules/ArticleKeywords';
import ArticleTitle from '../L2_Molecules/ArticleTitle';
import ArticlePageNav from '../L2_Molecules/ArticlePageNav';
import BreadCrumbList from '../L2_Molecules/BreadCrumbList';

import { blogDataSecond } from '../../tests/fixtures/bodyData';

import updatePages from '../../microcms/updatePages';
import { setPages } from '../../actions/articleActions';

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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 750px;
`;
/**
 * ブログの記事を表示する。
 */
const ArticleContainer = (props) => {
  document.title = props.title;
  props.prevId === undefined && console.log('prevIdがありません');
  props.nextId === undefined &&
    console.log(
      'nextIdがありません',
      props.views
      // props.pages.length < props.views.totalCount
    );
  console.log('ACP:', props);
  return (
    <Wrapper>
      <Container>
        <ArticleImg
          flag={false}
          src={props.src}
          imageMargin="0 auto"
          width="auto"
        />
        <TitleWrapper>
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
        </TitleWrapper>
        <ArticleBody body={props.body} />
        <ArticlePageNav
          prevId={props.prevId}
          prevTitle={props.prevTitle}
          nextId={props.nextId}
          nextTitle={props.nextTitle}
        />
      </Container>
    </Wrapper>
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
  size: 12,
  dateMargin: 'calc(15rem/16) auto 0 calc(10rem/16)',
  titleMargin: '0',
  titlePadding: '0 0 calc(6rem / 16) calc(10rem / 16)',
  link: '#',
  body: blogDataSecond,
};

/**
 * ArticleContainerでは、
 * 上位Router側からstate情報が格納されていない場合には
 * mapStateToPropsは満たされない設定になっている。
 */
const mapStateToProps = (state, ownProps) => {
  // console.log('ACS:', state);
  console.log('ACO:', ownProps);

  // const page = state.pages.find((page) => page.id === ownProps.id);
  // console.log(page);

  return {
    pages: state.pages,
    views: state.views,
    id: ownProps.page.id,
    title: ownProps.page.title,
    keywords: ownProps.page.keywords,
    createdAt: ownProps.page.createdAt,
    updatedAt: ownProps.page.updatedAt,
    src: ownProps.page.thumbnail.url,
    body: ownProps.page.body,
    prevId: ownProps.page.prevId,
    prevTitle: ownProps.page.prevTitle,
    nextId: ownProps.page.nextId,
    nextTitle: ownProps.page.nextTitle,
  };
};

export default connect(mapStateToProps)(ArticleContainer);
export { ArticleContainer };
