import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import IconSchedule from '../L1_Atoms/IconSchedule';
import IconUpdateSymbol from '../L1_Atoms/IconUpdateSymbol';

const DateWrapper = styled.div.attrs((props) => {
  return {
    style: {
      margin: `${props.dateMargin}`,
      order: `${props.order}`,
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const DateType = styled.time.attrs((props) => {
  return {
    dateTime: `${props.datetime}`,
    style: {
      color: `${props.color}`,
      fontSize: `${props.dateFontSize / 16}rem`,
      fontFamily: `${props.fontFamily}`,
    },
  };
})`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-weight: 300;
  letter-spacing: 0.2rem;
  margin: 0 calc(5rem / 16);
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
    <DateWrapper dateMargin={props.dateMargin} order={props.order}>
      <IconSchedule color={props.color} size={props.scheduleSize} />
      {createdDate === updatedDate ? (
        <DateType
          datetime={props.createdAt}
          color={props.color}
          dateFontSize={props.dateFontSize}
          fontFamily={props.fontFamily}
        >
          {createdDate}
        </DateType>
      ) : (
        <DateType
          datetime={props.updatedAt}
          color={props.color}
          dateFontSize={props.dateFontSize}
          fontFamily={props.fontFamily}
        >
          {createdDate}
          <IconUpdateSymbol size={props.updateSize} />
          {updatedDate}
        </DateType>
      )}
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
   * pxをremへ変換するのに
   * fontSize: `${props.dateSize/16}rem`
   * のように指定している。
   */
  dateFontSize: PropTypes.number,
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
  fontFamily: PropTypes.oneOf([
    'source-code-pro',
    'kan415typos-std',
    'monospace',
    'sans-serif',
  ]),
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
   * Svgの設定なのでpx変換は不要
   */
  scheduleSize: PropTypes.number,
  order: PropTypes.number,
};

ArticleDate.defaultProps = {
  color: '#787878',
  scheduleSize: 15,
  dateFontSize: 15,
  // dateMargin: 'calc(1rem/1.6) auto',
  dateMargin: 'calc(5rem/16) auto 0 calc(5rem/16)',
  fontFamily: 'source-code-pro',
  createdAt: '2021-05-02T07:38:52.010Z',
  updatedAt: '2021-05-11T07:32:08.904Z',
  updateSize: 15,
  order: 0,
};

export default ArticleDate;
