import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconRac from '../L1_Atoms/IconRac';
import SummaryDetails from './SummaryDetails';

const StartDiv = styled.div`
  display: flex;
  margin: 0;
  position: relative;
`;

const HeaderItem = styled.div`
  margin: 12px 16px;
  align-self: stretch;
`;

const HeaderLink = styled.a.attrs((props) => {
  return {
    href: '#',
    dataHotkey: 'g d',
    ariaLabel: 'Homepage',
    dataGaClick: 'Header, go to dashboard, icon:logo',
  };
})`
  font-weight: 600;
  color: '#fffff';
  white-space: nowrap;
`;

const HeaderStart = (props) => {
  return (
    <StartDiv>
      <HeaderItem>
        <HeaderLink />
        <IconRac size={45} color="#8b8c8e" />
      </HeaderItem>
      <SummaryDetails
        summaryLabel="Details"
        someLink={[
          {
            link: '#',
            linkLabel: 'Link α',
          },
          {
            link: '#',
            linkLabel: 'Link β',
          },
          {
            link: '#',
            linkLabel: 'Link γ',
          },
        ]}
      />
    </StartDiv>
  );
};

export default HeaderStart;
