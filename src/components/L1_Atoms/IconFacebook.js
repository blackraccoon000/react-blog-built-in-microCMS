import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    ariaHidden: 'true',
    version: '1.1',
    viewBox: '0 0 15.3 15.4',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.width}`,
    height: `${props.height}`,
    x: 0,
    y: 0,
  };
})`
  margin: 6px 0 0 10px;
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
    fillRule: 'evenodd',
  };
})``;

/**
 * Facebookのアイコンを参考にSVGデータを抜き出し、構成。
 */
const FacebookIcon = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z"
        />
      </g>
    </Svg>
  );
};

FacebookIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

FacebookIcon.defaultProps = {
  color: '#000',
  height: 18,
  width: 18,
};

export default FacebookIcon;
