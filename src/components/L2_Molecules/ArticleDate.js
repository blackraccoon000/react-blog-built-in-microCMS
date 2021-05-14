import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import IconSchedule from '../L1_Atoms/IconSchedule';

const DateWrapper = styled.div.attrs((props) => {
  return {
    style : {
      margin: `${props.dateMargin}`
    }
  }
})`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const DateType = styled.div.attrs((props) => {
  return {
    style: {
      color: `${props.color}`,
      fontSize: `${props.dateSize}px`,
    },
  };
})`
  font-weight: 300;
  letter-spacing: 0.2em;
  margin: 1px 0 0 5px;
  text-align: center;
`;

const ArticleDate = (props) => {
  const createdDate = DateTime.fromMillis(Date.parse(props.createdAt)).toFormat(
    'yyyy-LL-dd'
  );
  const updatedDate = DateTime.fromMillis(Date.parse(props.updatedAt)).toFormat(
    'yyyy-LL-dd'
  );
  const date =
    createdDate === updatedDate
      ? `${createdDate}`
      : `${createdDate} (${updatedDate})`;

  return (
    <DateWrapper
      dateMargin={props.dateMargin}
    >
      <IconSchedule
        color={props.color}
        height={props.height}
        width={props.width}
      />
      <DateType color={props.color} dateSize={props.dateSize}>
        {date}
      </DateType>
    </DateWrapper>
  );
};

ArticleDate.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  dateSize: PropTypes.number,
  dateMargin: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  width: PropTypes.number,
};

ArticleDate.defaultProps = {
  color: '#787878',
  height: 20,
  dateSize: 14,
  dateMargin: "0",
  createdAt: '2021-05-02T07:38:52.010Z',
  updatedAt: '2021-05-11T07:32:08.904Z',
  width: 20,
};

export default ArticleDate;
