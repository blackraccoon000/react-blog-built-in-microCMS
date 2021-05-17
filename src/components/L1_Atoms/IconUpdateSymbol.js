import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    ariaHidden: 'true',
    version: '1.1',
    viewBox: '0 0 30 30',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.size}`,
    height: `${props.size}`,
    x: 0,
    y: 0,
  };
})`
  margin: 0 calc(5rem / 16);
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

const IconUpdateSymbol = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M9.44,4.66c-2.07,1.28-4.02,3.17-4.99,5.56c-0.51,1.18-0.89,2.41-1.01,3.63c-0.09,0.86-0.08,1.64-0.03,2.43
          l-2.37,0.31l5.93,5.27l4.37-6.63l-2.96,0.39C8.32,14.29,8.43,13,8.78,11.84c0.46-1.61,1.41-3.1,2.76-4.31
          c1.34-1.21,3.05-2.16,4.95-2.68c1.9-0.55,4.1-0.46,6.25-0.18C19.03,2.36,13.62,2.1,9.44,4.66z"
        />
        <Path
          {...props}
          d="M29,12.28L23.07,7l-4.37,6.63l2.96-0.39c0.06,1.34-0.05,2.63-0.39,3.79c-0.46,1.61-1.41,3.1-2.76,4.31
          c-1.34,1.21-3.05,2.16-4.95,2.68c-1.9,0.55-4.1,0.46-6.25,0.18c3.7,2.31,9.11,2.57,13.29,0.01c2.07-1.28,4.02-3.17,4.99-5.56
          c0.51-1.18,0.89-2.41,1.01-3.63c0.09-0.86,0.08-1.64,0.03-2.43L29,12.28z"
        />
      </g>
    </Svg>
  );
};

IconUpdateSymbol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

IconUpdateSymbol.defaultProps = {
  color: '#2EA7E0',
  size: 30,
};

export default IconUpdateSymbol;
