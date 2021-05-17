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
  margin-top: calc(-.2rem/1.6);
  opacity: 0.6;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

const Polygon = styled.polygon.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

const IconSearchKeySlash = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M2.5,0.5C2.22,0.5,2,0.73,2,1v18c0,0.27,0.22,0.5,0.5,0.5h15c0.27,0,0.5-0.23,0.5-0.5V1
          c0-0.27-0.23-0.5-0.5-0.5H2.5z M16,17.5c0,0.27-0.23,0.5-0.5,0.5h-11C4.22,18,4,17.77,4,17.5v-15C4,2.22,4.22,2,4.5,2h11
          C15.77,2,16,2.22,16,2.5V17.5z"
        />
      </g>
      <Polygon {...props} points="8.6,17 6.73,17 11.4,3 13.27,3 " />
    </Svg>
  );
};

IconSearchKeySlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

IconSearchKeySlash.defaultProps = {
  color: '#8b8c8e',
  size: 20,
};

export default IconSearchKeySlash;
