import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import IconSchedule from '../L1_Atoms/IconSchedule';
import IconUpdateSymbol from "../L1_Atoms/IconUpdateSymbol"

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
      fontFamily: `${props.fontFamily}`
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin: 0 5px;
  text-align: center;
`;

const ArticleDate = (props) => {
  const createdDate = DateTime.fromMillis(Date.parse(props.createdAt)).toFormat(
    'yyyy-LL-dd'
  );
  const updatedDate = DateTime.fromMillis(Date.parse(props.updatedAt)).toFormat(
    'yyyy-LL-dd'
  );

  return (
    <DateWrapper
      dateMargin={props.dateMargin}
    >
      <IconSchedule
        color={props.color}
        size={props.scheduleSize}
      />
      {
        createdDate === updatedDate
        ? <DateType
            color={props.color}
            dateSize={props.dateSize}
            fontFamily={props.fontFamily}
          >
            {createdDate}
          </DateType>
        : <DateType
            color={props.color}
            dateSize={props.dateSize}
            fontFamily={props.fontFamily}
          >
            {createdDate}
            <IconUpdateSymbol size={props.updateSize}/>
            {updatedDate}
          </DateType>
      }
    </DateWrapper>
  );
};

ArticleDate.propTypes = {
  /**
   * IconSchedule/DateTypeの色を変更
   */
  color: PropTypes.string,
  /**
   * DateTypeの文字列の大きさを指定
   */
  dateSize: PropTypes.number,
  /**
   * DateTypeの余白を指定
   */
  dateMargin: PropTypes.string,
  /**
   * 取得した時間を入力(解析はluxon)
   */
  createdAt: PropTypes.string,
  /**
   * フォント種類を指定
   */
  fontFamily: PropTypes.oneOf(['source-code-pro',"kan415typos-std","monospace","sans-serif"]),
  /**
   * 取得した時間を入力(解析はluxon)
   */
  updatedAt: PropTypes.string,
  /**
   * IconUpdateSymbolのsizeを指定する。
   */
  updateSize: PropTypes.number,
  /**
   * IconScheduleのsizeを指定する。
   */
  scheduleSize: PropTypes.number,
};

ArticleDate.defaultProps = {
  color: '#787878',
  scheduleSize: 15,
  dateSize: 15,
  dateMargin: "20px auto",
  fontFamily: 'source-code-pro',
  createdAt: '2021-05-02T07:38:52.010Z',
  updatedAt: '2021-05-11T07:32:08.904Z',
  updateSize: 15,
};

export default ArticleDate;
