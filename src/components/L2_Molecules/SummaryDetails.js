import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChevonDown from '../L1_Atoms/IconChevonDown';

const Details = styled.details.attrs((props) => {
  return {
    style: {
      margin: `${props.detailMargin}`,
    },
  };
})`
  cursor: pointer;
  overflow: visible;
  padding: calc(8rem / 16);
  pointer-events: none;
  position: relative;

  &[open] {
    & summary {
      border-bottom: calc(2rem / 16) solid #8b8c8e;
      padding-bottom: calc(4rem / 16);
    }
    & div {
      height: auto;
    }
  }

  &[open] > summary:before {
    box-sizing: border-box;
    content: ' ';
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(230, 230, 230, 0.1);
    z-index: 10;
  }

  & div {
    position: absolute;
    z-index: 50;
  }
`;

const Summary = styled.summary.attrs((props) => {})`
  border: none;
  color: #8b8c8e;
  list-style: none;
  margin: 0 0 0 calc(5rem / 16);
  padding-top: calc(2rem / 16);
  pointer-events: auto;
  transition: 0.8s;
`;

const OtherLinks = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
  };
})`
  color: #8b8c8e;
  display: block;
  font-size: calc(14rem / 16);
  font-weight: 600;
  padding: calc(16rem / 16) calc(20rem / 16) 0;
  pointer-events: auto;
  transition: 0.8s;
  text-decoration: none;

  &:hover {
    color: #311b92;
    font-weight: bold;
  }
`;

const DropdownMenu = styled.div.attrs((props) => {})`
  background-color: #fff;
  background-clip: padding-box;
  border: calc(1rem / 16) solid #8b8c8e;
  border-radius: calc(10rem / 16);
  height: 0;
  margin-top: calc(10rem / 16);

  & a:last-child {
    margin-bottom: calc(10rem / 16);
  }
`;

const SummaryDetails = (props) => {
  return (
    <Details>
      <Summary>
        {props.summaryLabel}
        <ChevonDown />
      </Summary>
      <DropdownMenu>
        {props.someLinks.map((link) => {
          return (
            <OtherLinks key={link.linkLabel} link={link.link}>
              {link.linkLabel}
            </OtherLinks>
          );
        })}
      </DropdownMenu>
    </Details>
  );
};

SummaryDetails.propTypes = {
  detailMargin: PropTypes.string,
  summaryLabel: PropTypes.string,
  someLinks: PropTypes.array,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
};

SummaryDetails.defaultProps = {
  detailMargin: 'calc(18rem/16) calc(10rem/16) calc(10rem/16) calc(10rem/16)',
  summaryLabel: 'Why Github?',
  someLinks: [
    {
      link: '#',
      linkLabel: 'Link A',
    },
    {
      link: '#',
      linkLabel: 'Link B',
    },
    {
      link: '#',
      linkLabel: 'Link C',
    },
  ],
};

export default SummaryDetails;
