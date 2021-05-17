import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    ariaHidden: 'true',
    version: '1.1',
    viewBox: '0 0 273.5 222.3',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.size}`,
    height: `${props.size}`,
    x: 0,
    y: 0,
  };
})`
  margin: calc(6rem / 16) 0 0 calc(10rem / 16);
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
    fillRule: 'evenodd',
  };
})``;

const IconTwitter = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
        />
      </g>
    </Svg>
  );
};

IconTwitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

IconTwitter.defaultProps = {
  color: '#000',
  size: 20,
};

export default IconTwitter;
