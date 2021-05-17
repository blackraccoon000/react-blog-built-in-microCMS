import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cheerio from 'cheerio';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atelier-cave-dark.css';
import { blogDataSecond } from '../../tests/fixtures/bodyData';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

const BodyWrapper = styled.div.attrs((props) => {
  return {
    style: {
      order: `${props.order}`,
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: calc(30rem / 16) auto;
  width: calc(800rem / 16);
`;

const BodyType = styled.div.attrs((props) => {})`
  justify-content: center;
  width: calc(750rem / 16);

  & h2 {
    font-size: calc(18rem / 16);
    font-weight: 600;
    margin: calc(13rem / 16) auto;
    color: #787878;
  }
  & h3 {
    font-size: calc(16rem / 16);
    font-weight: 500;
    margin: calc(15rem / 16) auto;
    color: #787878;
  }
  & pre {
    background-color: #19171c;
    border: calc(2rem / 16) solid #19171c;
    border-radius: calc(1rem / 16);
    box-sizing: border-box;
    padding: calc(15rem / 16);
    width: calc(750rem / 16);

    & code {
      white-space: pre-wrap;
    }
  }
  & img {
    border: calc(1rem / 16);
    border-radius: calc(10rem / 16);
    display: flex;
    justify-content: center;
    margin-bottom: calc(25rem / 16);
    width: calc(750rem / 16);
  }
`;

const ArticleBody = (props) => {
  const $ = cheerio.load(props.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return (
    <BodyWrapper order={props.order}>
      <BodyType dangerouslySetInnerHTML={{ __html: $.html() }} />
    </BodyWrapper>
  );
};

ArticleBody.propTypes = {
  /**
   * 記事を文字列型で抜粋
   */
  body: PropTypes.string,
  order: PropTypes.number,
};

ArticleBody.defaultProps = {
  body: blogDataSecond,
  order: 0,
};

export default ArticleBody;
