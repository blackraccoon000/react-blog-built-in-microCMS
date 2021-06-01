import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavItem from '../L1_Atoms/NavItem';
import keywordRelMock from '../../tests/fixtures/keywordRelMock';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px;
`;

const KeywordGroup = styled.div`
  margin: 10px;
`;

const KeywordName = styled.h3`
  font-size: 20px;
  text-align: center;
`;

const KeywordLinkTitleGroup = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
`;

const KeywordLinkTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 3px;
  border-bottom: 1px solid #000;
  padding-bottom: 1px;
`;

const KeywordLinkIdList = (props) => {
  return (
    <Wrapper>
      {props.views.keywordRelational.map((mass, num) => {
        return (
          <KeywordGroup key={`${mass}_${num}`}>
            <KeywordName>
              <NavItem
                color={'#000'}
                fontSize={20}
                margin={'calc(10rem/16) calc(7rem/16) calc(3rem/16)'}
                padding={'calc(2rem / 16) calc(8rem / 16)'}
                value={mass.keyword}
                name={mass.keyword}
                link={`/keyword/${mass.keyword}`}
              />
            </KeywordName>
            <KeywordLinkTitleGroup>
              {mass.ids.map((idByTitle, num) => {
                return (
                  <KeywordLinkTitle key={`${idByTitle.id}_${num}`}>
                    <NavItem
                      color={'#000'}
                      fontSize={12}
                      margin={'calc(10rem/16) calc(7rem/16) calc(3rem/16)'}
                      padding={'calc(2rem / 16) calc(8rem / 16)'}
                      value={idByTitle.title} //Home
                      link={`/article/${idByTitle.id}`} // "/""
                    />
                  </KeywordLinkTitle>
                );
              })}
            </KeywordLinkTitleGroup>
          </KeywordGroup>
        );
      })}
    </Wrapper>
  );
};

KeywordLinkIdList.propTypes = {
  color: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string,
};

KeywordLinkIdList.defaultProps = {
  color: '#8b8c8e',
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  title: '記事名',
  views: {
    keywordRelational: keywordRelMock,
  },
};

const mapStateToProps = (state, ownProps) => {
  const { articles, views, status } = state;
  const keyword =
    ownProps.computedMatch !== undefined
      ? ownProps.computedMatch.params.id
      : '';

  return {
    articles,
    title: keyword,
  };
};

export default connect(mapStateToProps)(KeywordLinkIdList);
export { KeywordLinkIdList };
