import React from 'react';
import styled from 'styled-components';
import cheerio from 'cheerio';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atelier-cave-dark.css';
import Loading from '../L1_Atoms/Loading';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

import ArticleBody from '../L2_Molecules/ArticleBody';
import ArticleImg from '../L2_Molecules/ArticleImg';
import TitleWrapper from '../L3_Organisms/TitleWrapper';

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

const BodyWrapper = styled.div`
  margin: 20px;
`;

const BodyTitle = styled.h1.attrs((props) => {})`
  align-items: center;
  display: flex;
  font-family: 'kan415typos-std';
  font-size: calc(12 / 16) rem;
  text-align: center;
  margin: calc(20rem / 16) 0 calc(5rem / 16);
  padding: calc(8rem / 16);
`;

const TextLine = styled.p.attrs((props) => {})`
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
  padding-bottom: 6px;
`;

const About = (props) => {
  document.title = 'このページについて';
  const width =
    window.parent.screen.width < 800 ? window.parent.screen.width : 800;
  return (
    <Wrapper>
      <Container>
        <ArticleImg
          flag={false}
          src={`https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/c24d720c28a140eb93ff0bbb2c763569/mokuro.png?w=${width}`}
          imageMargin="0 auto"
          width="100%"
        />
        <BodyTitle>このページについて</BodyTitle>
        <BodyWrapper>
          <TextLine>
            このページはReactの練習用ページとして公開しています。
          </TextLine>
          <TextLine>React &amp; Reduxをベースに、</TextLine>
          <TextLine>
            CSSはCSS in JSのstyled-componentsを活用しています。
          </TextLine>
          <TextLine>
            デプロイ先はNetlifyを活用し、コンテンツ管理はMicroCMSをベースにしています。
          </TextLine>
          <TextLine>
            本来、作成したページの詳細は公開しないことが常識ですが、
          </TextLine>
          <TextLine>勉強用ということで全部公開しようと考えています。</TextLine>
          <TextLine>詳しくはまた追記します。</TextLine>
        </BodyWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;
