import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleImg from "../L2_Molecules/ArticleImg"
import ArticleTitle from "../L2_Molecules/ArticleTitle"
import ArticleKeywords from "../L2_Molecules/ArticleKeywords"
import ArticleDate from "../L2_Molecules/ArticleDate"

const CardDivision = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff;
  border: 1px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 3px rgb(0 0 0 / 14%);
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0;
  position: relative;
  width: 325px;
`;

const ArticleCard = (props) => {
  return (
    <CardDivision>
      <ArticleImg
        height="none"
        src={props.src}
        radius="10px 10px 0 0"
        imageMargin={props.imageMargin}
        width="100%"
      />
      <ArticleTitle
        title={props.title}
        titleMargin={props.titleMargin}
        link={props.link}
      />
      <ArticleKeywords keywords={props.keywords} />
      <ArticleDate
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
        dateMargin={props.dateMargin}
      />
    </CardDivision>
  );
}

ArticleCard.propTypes = {
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
  dateMargin: PropTypes.string,
};

/**
 * Storybook用、通常の動作では表示されない。
 */
 ArticleCard.defaultProps = {
  title: 'Article Title',
  titleMargin: "10px auto",
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  createdAt: '2021-05-02T07:38:52.010Z',
  updatedAt: '2021-05-11T07:32:08.904Z',
  src:
    'https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/2687c64d1e7e4a8b8fef792ff909ea81/cat_four.jpg',
  link: '#',
  imageMargin: "0",
  height: "none",
  radius:"10px 10px 0 0",
  dateMargin: "10px 0",
};


export default ArticleCard;