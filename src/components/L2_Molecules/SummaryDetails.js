import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChevonDown from '../L1_Atoms/IconChevonDown';

const Details = styled.details.attrs((props) => {
  return {
    style: {
      margin: `${props.detailMargin}`
    }
  }
})`
  cursor: pointer;
  overflow: visible;
  padding: 8px;
  pointer-events: none;
  position: relative;
  /* width: 100%; */

  &[open] {
    & summary {
      border-bottom: 2px solid #8b8c8e;
      padding-bottom: 4px;
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
  margin: 0 0 0 5px;
  padding-top: 2px;
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
  font-size: 14px;
  font-weight: 600;
  padding: 16px 20px 0;
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
  border: 1px solid #8b8c8e;
  border-radius: 10px;
  height: 0px;
  margin-top: 10px;

  & a:last-child {
    margin-bottom: 10px;
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
  detailMargin: "18px 10px 10px 10px",
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
