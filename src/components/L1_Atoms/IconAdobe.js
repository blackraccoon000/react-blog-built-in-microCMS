import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    version: '1.1',
    viewBox: `0 0 30 30`,
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.size}`,
    height: `${props.size}`,
    x: 0,
    y: 0,
  };
})`
  margin: 4px 0 0 10px;
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

/**
 * Adobe アイコン
 */
const IconAdobe = (props) => {
  return (
    <Svg {...props}>
      <Path color={props.color}
        d="M23.36,1.18H6.64C3.53,1.18,1,3.71,1,6.82v16.36c0,3.11,2.53,5.64,5.64,5.64h16.72c3.11,0,5.64-2.53,5.64-5.64
        V6.82C29,3.71,26.47,1.18,23.36,1.18z M25.01,21.74c0,1.53-1.11,2.8-2.56,3.06c-2.45-5.86-4.88-11.65-7.38-17.61
        c-1.96,4.66-3.83,9.08-5.75,13.65c1.97,0,3.68,0.02,5.39-0.01c0.59-0.01,0.89,0.19,1.09,0.75c0.41,1.1,0.84,2.19,1.28,3.28H8.11
        c-1.72,0-3.12-1.4-3.12-3.12v-0.87c1.92-4.6,4.73-11.31,6.56-15.74h6.96c1.72,4.14,4.55,10.93,6.5,15.62V21.74z"
      />
    </Svg>
  );
};

IconAdobe.propTypes = {
  /**
   * 色を変更できる。
   */
  color: PropTypes.string,
  /**
   * サイズを変更できる。(正方形アイコンでheight/widthに適用)
   */
  size: PropTypes.number,
};

IconAdobe.defaultProps = {
  color: '#C30D23',
  size: 22,
};

export default IconAdobe;