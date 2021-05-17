import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    version: '1.1',
    viewBox: `0 0 15 8`,
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.width}`,
    height: `${props.height}`,
    x: 0,
    y: 0,
    style: {
      margin: `${props.margin}`,
    },
  };
})`
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

/**
 * カルーセルのボタンとして活用
 * どこかのサイトを参考に自作
 */
const IconChevonDown = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M7.5,7.83c-0.26,0-0.51-0.1-0.71-0.29L1.14,1.88c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0L7.5,5.41l4.95-4.95
          c0.39-0.39,1.02-0.39,1.41,0s0.39,1.02,0,1.41L8.21,7.54C8.01,7.73,7.76,7.83,7.5,7.83z"
        />
      </g>
    </Svg>
  );
};

IconChevonDown.propTypes = {
  /**
   * 色を変更できる。
   */
  color: PropTypes.string,
  margin: PropTypes.string,
  /**
   * 高さを変更できる。
   */
  height: PropTypes.number,
  /**
   * 横幅を変更できる。
   */
  width: PropTypes.number,
};

IconChevonDown.defaultProps = {
  color: '#8b8c8e',
  margin: 'calc(4rem/16) 0 0 calc(10rem/16)',
  height: 8,
  width: 15,
};

export default IconChevonDown;
