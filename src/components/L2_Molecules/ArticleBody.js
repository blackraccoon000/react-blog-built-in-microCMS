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
  margin: 30px auto 30px auto;
  width: 800px;
`;

const BodyType = styled.div.attrs((props) => {})`
  justify-content: center;
  width: 750px;

  & h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 15px auto;
    color: #787878;
  }
  & pre {
    background-color: #19171c;
    border: 2px solid #19171c;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    width: 750px;

    & code {
      white-space: pre-wrap;
    }
  }
  & img {
    border: 1px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    width: 750px;
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
  body: PropTypes.string,
};

ArticleBody.defaultProps = {
  body: blogDataSecond,
};

export default ArticleBody;
