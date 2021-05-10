import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    ariaHidden: 'true',
    version: '1.1',
    viewBox: '0 0 19.17 13.6',
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
    fillRule: 'evenodd',
  };
})``;

const IconYoutube = (props) => {
  return (
    <Svg {...props}>
      <g>
        <Path
          {...props}
          d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z"
        />
      </g>
    </Svg>
  );
};

IconYoutube.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

IconYoutube.defaultProps = {
  color: '#000',
  height: 22,
  width: 22,
};

export default IconYoutube;
