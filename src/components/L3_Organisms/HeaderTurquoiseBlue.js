import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import HeaderLogo from "../L2_Molecules/HeaderLogo"
import IconAbout from "../L1_Atoms/IconAbout"
import IconFocus from "../L1_Atoms/IconFocus"

const Header = styled.header.attrs(props => {
  return {
    style: {
      position: "block",
      width: "100%"
    }
  }
})`
  background-color: #61b1c8;
`

const Nav = styled.nav.attrs(props => {})`
  display: flex;
  justify-content: space-between;
  margin: 0  calc(3rem/1.6);
  align-items: center;
`

const HeaderTurquoiseBlue = (props) => {
  return (
    <Header>
      <Nav>
        <HeaderLogo
          color={props.iconColor}
          order={props.hLOrder}
          height={props.logoHeight}
          width={props.logoWidth}
          size={props.racSize}
        />
        <IconAbout size={props.iconSize} color={props.iconColor} order={props.iAOrder}/>
        <IconFocus size={props.iconSize} color={props.iconColor} order={props.iFOrder}/>
      </Nav>
    </Header>
  )
}

HeaderTurquoiseBlue.propTypes = {
  iconColor: PropTypes.string,
  /**
   * IconAbout/IconFocusの大きさ調整
   */
  iconSize: PropTypes.number,
  iAOrder: PropTypes.number,
  iFOrder: PropTypes.number,
  hLOrder: PropTypes.number,
  /**
   * PlayWellLogoの高さを変更できる。
   */
  logoHeight: PropTypes.number,
  /**
   * PlayWellLogoの横幅を変更できる。
   */
  logoWidth: PropTypes.number,
  /**
   * IconRacでのサイズを変更できる。
   */
  racSize: PropTypes.number,
}

HeaderTurquoiseBlue.defaultProps = {
  iconColor: "#e6e6e6",
  iconSize: 20,
  iAOrder: 1,
  iFOrder: 3,
  hLOrder: 2,
  logoHeight:20,
  logoWidth:120,
  racSize:40,
}

export default HeaderTurquoiseBlue