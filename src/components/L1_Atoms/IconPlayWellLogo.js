import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkWrapper = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
    dataHotkey: 'g d',
    ariaLabel: 'Homepage',
    dataGaClick: 'Header, go to Home, icon:PlayWell String Image',
  };
})`
  font-size: 0;
`;

const Svg = styled.svg.attrs((props) => {
  return {
    version: '1.1',
    viewBox: `0 0 180 30`,
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.width}`,
    height: `${props.height}`,
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
 * PlayWellのアイコン
 * 参考フォント：
 * <a href="https://fonts.adobe.com/fonts/kan415typos-std" target="_blank" rel="noopener">漢字タイポス４１５ Std R</a>
 */
const IconPlayWellLogo = (props) => {
  return (
    <LinkWrapper link={props.link}>
      <Svg {...props}>
        {/* */}
        <Path color={props.color} d="M13.46,2.46C20.56,2.46,24,4.71,24,9.36c0,4.62-3.74,7.07-10.74,7.07H7.68v11.52H2.44V2.46H13.46z M12.1,15.07
        c4.35,0,6.36-1.77,6.36-5.51c0-2.72-1.33-4.76-3.5-5.44c-0.68-0.2-1.56-0.31-2.86-0.31H7.68v11.25H12.1z"/>
        <Path color={props.color} d="M23.61,27.96V2.46h5.27V26.6h13.33v1.36H23.61z"/>
        <Path color={props.color} d="M56.01,2.46l10.57,25.5h-6.26l-3.47-9.18H45.68l-3.13,7.82c-0.2,0.54-0.34,1.05-0.34,1.36h-1.87l10.3-25.5H56.01z
        M46.15,17.42h10.23l-5-13.12L46.15,17.42z"/>
        <Path color={props.color} d="M74.95,15.65v12.31h-5.24V17.28L59.34,2.46h6.19l8.33,12.14l6.87-11.12c0.2-0.31,0.31-0.58,0.37-1.02h2.07L74.95,15.65z"/>
        <Path color={props.color} d="M115.45,27.96h-4.56l-5.2-18.22l-5.2,18.22h-4.56l-6.77-25.5h5.68l5.37,20.98l5.37-19.55h3.47l5.75,19.75l5.07-19.85
        c0.1-0.41,0.14-0.71,0.14-1.33h1.94L115.45,27.96z"/>
        <Path color={props.color} d="M120.68,27.96V2.46h19.04v1.36h-13.8v10.17h12.51v1.36h-12.51V26.6h16.89v1.36H120.68z"/>
        <Path color={props.color} d="M141.6,27.96V2.46h5.27V26.6h13.33v1.36H141.6z"/>
        <Path color={props.color} d="M159.25,27.96V2.46h5.27V26.6h13.33v1.36H159.25z"/>
      </Svg>
    </LinkWrapper>
  );
};

IconPlayWellLogo.propTypes = {
  /**
   * 色を変更できる。
   */
  color: PropTypes.string,
  /**
   * 高さを変更できる。
   */
  height: PropTypes.number,
  /**
   * link先を設定する。
   */
  link: PropTypes.string,
  /**
   * 横幅を変更できる。
   */
  width: PropTypes.number,
};

IconPlayWellLogo.defaultProps = {
  color: '#fff',
  height: 30,
  link: "/",
  width: 180,
};

export default IconPlayWellLogo;