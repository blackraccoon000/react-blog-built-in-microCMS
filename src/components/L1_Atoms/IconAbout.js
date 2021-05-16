import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkWrapper = styled.a.attrs(props => {
  return {
    href: `${props.link}`,
    style: {
      order:`${props.order}`
    }
  }
})`
  text-decoration:none
`

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
  margin: 0;
  opacity: 1;
`;

const Path = styled.path.attrs((props) => {
  return {
    fill: `${props.color}`,
  };
})``;

/**
 * About アイコン
 */
const IconAbout = (props) => {
  return (
    <LinkWrapper {...props}>
      <Svg {...props}>
        <Path color={props.color}
          d="M15,0.6C7.06,0.6,0.6,7.06,0.6,15c0,7.94,6.46,14.4,14.4,14.4c7.94,0,14.4-6.46,14.4-14.4C29.4,7.06,22.94,0.6,15,0.6z
          M15,26.52C8.65,26.52,3.48,21.35,3.48,15C3.48,8.65,8.65,3.48,15,3.48c6.35,0,11.52,5.17,11.52,11.52
          C26.52,21.35,21.35,26.52,15,26.52z"/>
        <Path color={props.color}
          d="M15,11.55c1.98,0,3.59-1.61,3.59-3.59S16.98,4.38,15,4.38s-3.59,1.61-3.59,3.59S13.02,11.55,15,11.55z"/>
        <Path color={props.color}
          d="M18,15.03c-0.26-1.11-1.13-2.04-2.32-2.32c-1.66-0.38-3.31,0.66-3.68,2.32l-1.33,5.83c-0.14,0.63-0.15,1.31,0,1.98
          c0.55,2.39,2.93,3.89,5.32,3.34c2.39-0.55,3.89-2.93,3.34-5.32L18,15.03z"/>
      </Svg>
    </LinkWrapper>
  );
};

IconAbout.propTypes = {
  /**
   * 色を変更できる。
   */
  color: PropTypes.string,
  /**
   * サイズを変更できる。(正方形アイコンでheight/widthに適用)
   */
  size: PropTypes.number,
  /**
   * 押下時に転送するリンク先。
   */
  link: PropTypes.string,
  /**
   * 順番を指示。
   */
  order: PropTypes.number,
};

IconAbout.defaultProps = {
  color: '#a3d9e8',
  size: 22,
  link: "/about",
  order: 0
};

export default IconAbout;