import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleImg from '../L2_Molecules/ArticleImg';
import ArticleTitle from '../L2_Molecules/ArticleTitle';
import ArticleKeywords from '../L2_Molecules/ArticleKeywords';
import ArticleDate from '../L2_Molecules/ArticleDate';

const Post = styled.article.attrs((props) => {})`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const ArticleCardTurquoiseBlue = (props) => {
  return (
    <Post>
      <ArticleTitle
        order={2}
        link={`/article/${props.id}`}
        title={props.title}
        titleFontSize={props.titleFontSize}
        titleMargin={props.titleMargin}
      />
      <ArticleKeywords
        fontSize={props.keywordSize}
        justifyContent={props.keywordJustifyContent}
        keywords={props.keywords}
        margin={props.keywordMargin}
        padding={props.keywordPadding}
        order={3}
      />
      <ArticleDate
        dateFontSize={props.dateSize}
        dateMargin={props.dateMargin}
        updateSize={props.dateSize}
        scheduleSize={props.dateSize}
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
        order={4}
      />
      <ArticleImg
        link={`/article/${props.id}`}
        src={props.src}
        order={1}
        imageMargin={props.imageMargin}
        imageRadius={props.imageRadius}
        imageHeight={props.imageHeight}
        height={props.imageHeight}
        width={props.imageWidth}
      />
    </Post>
  );
};

ArticleCardTurquoiseBlue.propTypes = {
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
   * L2_Molecules/ArticleImg
   * ブログのトップイメージのmargin topを指定する。
   * 記事は30px, カードは0を指定。
   */
  imageMargin: PropTypes.string,
  /**
   * L2_Molecules/ArticleImg
   * ブログのトップイメージのheightを指定する。
   * 記事は100%, カードは0を指定。
   */
  height: PropTypes.string,
  /**
   * L2_Molecules/ArticleImg
   * ブログのトップイメージのradiusを指定する。
   */
  radius: PropTypes.string,
  /**
   * L2_Molecules/Title
   * 記事は  titleMargin: "20px auto 0 auto",
   * カードは　  titleMargin: "20px auto 20px auto",
   */
  titleMargin: PropTypes.string,
  titleFontSize: PropTypes.number,
  dateMargin: PropTypes.string,
  imageMargin: PropTypes.string,
  imageRadius: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  dateSize: PropTypes.number,
  keywordSize: PropTypes.number,
  keywordMargin: PropTypes.string,
  keywordPadding: PropTypes.string,
  keywordJustifyContent: PropTypes.string,
};

ArticleCardTurquoiseBlue.defaultProps = {
  title: 'Article Card Title',
  titleFontSize: 18,
  titleMargin: 'calc(5rem/16) auto 0',
  dateSize: 12,
  dateMargin: 'calc(5rem/16) auto calc(15rem/16) auto',
  imageMargin: '0',
  imageRadius: '0',
  imageWidth: '100%',
  imageHeight: 'calc(270rem/16)',
  keywordSize: 10,
  keywordMargin: 'calc(5rem/16) calc(3rem/16) calc(2rem/16)',
  keywordPadding: 'calc(2rem / 16) calc(8rem / 16) calc(5rem / 16)',
  keywordJustifyContent: 'center',
};

const mapStateToProps = (state) => {
  // console.log('ACTB-state:', state);
  return {
    pages: state.pages,
    views: state.views,
  };
};

export default connect(mapStateToProps)(ArticleCardTurquoiseBlue);
export { ArticleCardTurquoiseBlue };
