import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavItem from '../L1_Atoms/NavItem';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: calc(30rem / 16) 0 calc(10rem / 16) 0;
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: calc(5rem / 16) calc(5rem / 16) 0 calc(5rem / 16);
`;

const KeywordUpper = styled.div`
  border-bottom: 1px solid ${(props) => props.color};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const KeywordDowner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const BreadCrumbList = (props) => {
  return (
    <Wrapper>
      <NavItem
        color={props.color}
        fontSize={12}
        margin={'calc(10rem/16) calc(7rem/16) calc(10rem/16)'}
        padding={'calc(2rem / 16) calc(8rem / 16)'}
        value="Home"
        link="/"
      />
      <NavItem
        color={props.color}
        fontSize={12}
        margin={'calc(10rem/16) 0'}
        padding={'calc(2rem / 16) 0'}
        value=">"
        flag={false}
      />
      <KeywordWrapper>
        <KeywordUpper color={props.color}>
          <NavItem
            color={props.color}
            fontSize={13}
            margin={'calc(2rem/16) 0 0 calc(10rem/16)'}
            padding={'calc(2rem/16) 0 calc(8rem/16)'}
            value="keywords"
            link="/keywords"
          />
        </KeywordUpper>
        <KeywordDowner>
          {props.keywords.map((keyword, num) => {
            return (
              <NavItem
                key={`${keyword}_${num}`}
                color={props.color}
                fontSize={12}
                margin={'calc(2rem/16) calc(7rem/16) calc(10rem/16)'}
                padding={'0 calc(8rem / 16)'}
                value={keyword}
                link={`/keyword/${keyword}`}
              />
            );
          })}
        </KeywordDowner>
      </KeywordWrapper>
      {window.parent.screen.width > 600 && (
        <>
          <NavItem
            color={props.color}
            fontSize={12}
            margin={'calc(10rem/16) 0 calc(10rem/16)'}
            padding={'calc(2rem / 16) 0'}
            value=">"
            flag={false}
          />
          <NavItem
            color={props.color}
            fontSize={12}
            margin={'calc(10rem/16) calc(7rem/16) calc(10rem/16)'}
            padding={'calc(2rem / 16) calc(8rem / 16)'}
            value={props.title}
            link={'#'}
          />
        </>
      )}
    </Wrapper>
  );
};

BreadCrumbList.propTypes = {
  color: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string,
};

BreadCrumbList.defaultProps = {
  color: '#8b8c8e',
  keywords: ['?????????', '?????????', 'test', 'blog', 'microcms'],
  title: '?????????',
};

export default BreadCrumbList;
