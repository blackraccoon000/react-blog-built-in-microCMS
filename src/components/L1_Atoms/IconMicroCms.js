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
  margin: calc(4rem / 16) 0 0 calc(10rem / 16);
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

/**
 * MicroCMSのアイコン
 */
const IconMicroCms = (props) => {
  return (
    <Svg {...props}>
      <Path
        {...props}
        d="M26.6,1.8H3.4c-1.19,0-2.15,0.96-2.15,2.15v22.1c0,1.19,0.96,2.15,2.15,2.15H26.6c1.19,0,2.15-0.96,2.15-2.15V3.95
      C28.74,2.76,27.78,1.8,26.6,1.8z M7.31,17.95l-2.08-2.08c-0.24-0.24-0.24-0.62,0-0.86l9.11-9.11c0.24-0.24,0.62-0.24,0.86,0
      l2.08,2.08c0.24,0.24,0.24,0.62,0,0.86l-1.19,1.19c-0.24,0.24-0.62,0.24-0.86,0c-0.23-0.23-0.61-0.24-0.85-0.01l-5.01,4.84
      c-0.25,0.24-0.25,0.65,0.01,0.88l0.06,0.05c0.25,0.24,0.26,0.63,0.02,0.88l-1.27,1.27C7.93,18.18,7.54,18.18,7.31,17.95z
      M10.35,20.99l-1.22-1.22c-0.26-0.26-0.26-0.68,0-0.94l9.03-9.03c0.26-0.26,0.68-0.26,0.94,0l2.03,2.03c0.26,0.26,0.26,0.68,0,0.94
      l-1.21,1.21c-0.22,0.22-0.56,0.26-0.82,0.1c-0.26-0.16-0.59-0.12-0.81,0.09l-7.01,6.83C11.02,21.25,10.6,21.24,10.35,20.99z
      M25.22,16.94L24.16,18c-0.27,0.27-0.69,0.28-0.98,0.03l-0.01-0.01c-0.29-0.25-0.71-0.23-0.98,0.03l-6.87,6.87
      c-0.28,0.28-0.74,0.28-1.02,0l-2.25-2.25c-0.28-0.28-0.28-0.74,0-1.02l1.03-1.03c0.28-0.28,0.74-0.28,1.02,0s0.74,0.28,1.02,0
      l6.9-6.9c0.28-0.28,0.74-0.28,1.02,0l2.19,2.19C25.51,16.2,25.51,16.66,25.22,16.94z"
      />
    </Svg>
  );
};

IconMicroCms.propTypes = {
  /**
   * 色を変更できる。
   */
  color: PropTypes.string,
  /**
   * 高さを変更できる。
   */
  size: PropTypes.number,
};

IconMicroCms.defaultProps = {
  color: '#000',
  size: 23,
};

export default IconMicroCms;
