import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconRac from '../L1_Atoms/IconRac';

const StartDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 24px 0 30px;
  position: relative;
`;

const HeaderStart = (props) => {
  return (
    <StartDiv>
      <IconRac
        color={props.color}
        link={props.link}
        size={props.size}
      />
    </StartDiv>
  );
};

HeaderStart.propTypes = {
  color: PropTypes.string,
  detailMargin: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.number,
  summaryLabel: PropTypes.string,
  someLinks: PropTypes.array
}

HeaderStart.defaultProps = {
  color: "#8b8c8e",
  detailMargin: "0",
  link: "/",
  size: 34,
  summaryLabel: "Links",
  someLinks: [
    {
      link: '/',
      linkLabel: 'Top'
    },
    {
      link: '/help',
      linkLabel: 'Help'
    },
  ]
}

export default HeaderStart;
