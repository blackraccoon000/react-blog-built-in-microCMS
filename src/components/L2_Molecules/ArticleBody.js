import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cheerio from 'cheerio';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atelier-cave-dark.css';
import Loading from '../L1_Atoms/Loading';

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
  width: calc(300rem / 16);

  @media screen and (min-width: 900px) {
    width: calc(800rem / 16);
  }
`;

const BodyType = styled.div.attrs((props) => {
  return {
    style: {
      fontFamily: `${props.fontFamily}`,
    },
  };
})`
  justify-content: center;
  width: calc(280rem / 16);

  @media screen and (min-width: 900px) {
    width: calc(750rem / 16);
  }

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
    & strong {
      background-color: transparent;
    }
  }
  & pre {
    background-color: #19171c;
    border: calc(2rem / 16) solid #19171c;
    border-radius: calc(1rem / 16);
    box-sizing: border-box;
    padding: calc(15rem / 16);
    width: calc(280rem / 16);

    @media screen and (min-width: 900px) {
      width: calc(750rem / 16);
    }

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
    width: calc(280rem / 16);

    @media screen and (min-width: 900px) {
      width: calc(750rem / 16);
    }
  }
`;

const ArticleBody = (props) => {
  let $ = '';
  if (props.body !== undefined) {
    $ = cheerio.load(props.body);
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });
  }

  return (
    <BodyWrapper order={props.order}>
      {props.body !== undefined ? (
        <BodyType
          dangerouslySetInnerHTML={{ __html: $.html() }}
          fontFamily={props.fontFamily}
        />
      ) : (
        <Loading height="none" bgColor="none" />
      )}
    </BodyWrapper>
  );
};

ArticleBody.propTypes = {
  /**
   * ??????????????????????????????
   */
  body: PropTypes.string,
  fontFamily: PropTypes.oneOf([
    'source-code-pro',
    'kan415typos-std',
    'monospace',
    'sans-serif',
  ]),
  order: PropTypes.number,
};

ArticleBody.defaultProps = {
  body: undefined,
  fontFamily: 'source-code-pro',
  order: 0,
};

const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  const id =
    ownProps.computedMatch !== undefined
      ? ownProps.computedMatch.params.id
      : '';
  const article = articles.find((article) => article.id === id);
  const body = article !== undefined ? article.body : undefined;

  return {
    id,
    body,
  };
};

export default connect(mapStateToProps)(ArticleBody);
export { ArticleBody };
