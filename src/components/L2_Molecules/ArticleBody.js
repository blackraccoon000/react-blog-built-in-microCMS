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

const BodyWrapper = styled.div.attrs((props) => {})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: calc(3rem/1.6) auto;
  width: calc(80rem/1.6);
`;

const BodyType = styled.div.attrs((props) => {})`
  justify-content: center;
  width: calc(75rem/1.6);

  & h2 {
    font-size: calc(1.8rem/1.6);
    font-weight: 600;
    margin: calc(1.3rem/1.6) auto;
    color: #787878;
  }
  & h3 {
    font-size: calc(1.6rem/1.6);
    font-weight: 500;
    margin: calc(1.5rem/1.6) auto;
    color: #787878;
  }
  & pre {
    background-color: #19171c;
    border: calc(.2rem/1.6) solid #19171c;
    border-radius: calc(1rem/1.6);
    box-sizing: border-box;
    padding: calc(1.5rem/1.6);
    width: calc(75rem/1.6);

    & code {
      white-space: pre-wrap;
    }
  }
  & img {
    border: calc(.1rem/1.6);
    border-radius: calc(1rem/1.6);
    display: flex;
    justify-content: center;
    margin-bottom: calc(2.5rem/1.6);
    width: calc(75rem/1.6);
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
    <BodyWrapper>
      <BodyType dangerouslySetInnerHTML={{ __html: $.html() }} />
    </BodyWrapper>
  );
};

ArticleBody.propTypes = {
  /**
   * 記事を文字列型で抜粋
   */
  body: PropTypes.string,
};

ArticleBody.defaultProps = {
  body: blogDataSecond,
};

export default ArticleBody;
