import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SummaryDetails from './SummaryDetails';

const MenuWrapper = styled.nav.attrs((props) => {})`
  display: flex;
`;

const Unordered = styled.ul.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const ListItem = styled.li.attrs((props) => {})`
  align-items: center;
  font-size: calc(15rem / 16);
  margin: 0 auto;
`;

const HeaderMenu = (props) => {
  return (
    <MenuWrapper>
      <Unordered>
        <ListItem>
          <SummaryDetails
            detailMargin={props.detailMargin}
            summaryLabel={props.summaryLabel}
            someLinks={props.someLinks}
          />
        </ListItem>
        <ListItem>
          <SummaryDetails
            detailMargin={props.detailMargin}
            summaryLabel={props.summaryLabel}
            someLinks={props.someLinks}
          />
        </ListItem>
      </Unordered>
    </MenuWrapper>
  );
};

HeaderMenu.propTypes = {
  detailMargin: PropTypes.string,
  summaryLabel: PropTypes.string,
  someLinks: PropTypes.array,
};

HeaderMenu.defaultProps = {
  detailMargin: '0',
  summaryLabel: 'Links',
  someLinks: [
    {
      link: '/',
      linkLabel: 'Top',
    },
    {
      link: '/help',
      linkLabel: 'Help',
    },
  ],
};

export default HeaderMenu;
