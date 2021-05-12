import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    version: '1.1',
    viewBox: `0 0 20 20`,
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.size}`,
    height: `${props.size}`,
    x: 0,
    y: 0,
  };
})`
  margin-top: -2px;
  opacity: 0.6;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

const IconFocus = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </g>
    </Svg>
  );
};

IconFocus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

IconFocus.defaultProps = {
  color: '#8b8c8e',
  size: 20,
};

export default IconFocus;
