import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    version: '1.1',
    viewBox: `0 0 84 84`,
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.width}`,
    height: `${props.height}`,
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

const Circle = styled.circle.attrs((props) => {
  return {
    fill: `${props.fill}`,
  };
})``;

/**
 * Chromaticのアイコン
 */
const IconChromatic = (props) => {
  return (
    <Svg {...props}>
      <g fill="none" fillRule="evenodd">
        <Circle fill={props.fill} cx="42" cy="42" r="42" />
        <Path
          color={props.color}
          d="M51.9 61.3l-6.7-3.8 20-11.6 2.2-1.5c2.7 3.7 3 8.6.6 12.6a11.8 11.8 0 0 1-16.1 4.3zm-1.6 2.8c.7.4 1.5.8 2.4 1.1a11.8 11.8 0 0 1-22.5-5V37.1l10.2 5.8v14.6c0 .5.3 1 .8 1.4l9 5.2zm-24-1.2A11.8 11.8 0 0 1 14.7 48c.9-3 2.8-5.6 5.5-7.2l6.7-3.8v23.1c0 .9 0 1.8.2 2.7h-1zm25.9-28.6L42 40l-12.6-7a1.6 1.6 0 0 0-1.6 0l-9 5.2-2.2 1.5A11.7 11.7 0 0 1 16 27a11.8 11.8 0 0 1 16.1-4.3l20.1 11.6zM42 12c6.5 0 11.8 5.3 11.8 11.8v7.7L33.7 19.9a15 15 0 0 0-2.4-1.1c2-4.1 6-6.8 10.7-6.8zm26 15a11.8 11.8 0 0 1-4.3 16.1L43.6 54.7V42.9l12.6-7.2c.5-.3.8-.9.8-1.4V23.8c0-.9 0-1.8-.2-2.6h1c4.2 0 8 2.2 10.2 5.8z"
        />
      </g>
    </Svg>
  );
};

IconChromatic.propTypes = {
  /**
   * 色を変更できる。
   */
  color: PropTypes.string,
  /**
   * 高さを変更できる。
   */
  height: PropTypes.number,
  /**
   * 横幅を変更できる。
   */
  width: PropTypes.number,
};

IconChromatic.defaultProps = {
  color: '#fff',
  fill: "#586069", //"#FC521F"
  height: 22,
  width: 22,
};

export default IconChromatic;
