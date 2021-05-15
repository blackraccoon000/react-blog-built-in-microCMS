import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRac from "../L1_Atoms/IconRac"
import IconPlayWellLogo from "../L1_Atoms/IconPlayWellLogo"

const Wrapper = styled.div.attrs(props => {
  return {
    style: {
      order: `${props.order}`
    }
  }
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const HeaderLogo = (props)  => {
  return (
    <Wrapper order={props.order}>
      <IconPlayWellLogo {...props}/>
      <IconRac
        {...props}
      />
    </Wrapper>
  )
}

HeaderLogo.propTypes = {
  /**
   * IconRac/IconPlayWellの色を変更できる。
   */
  color: PropTypes.string,
  /**
   * IconRacのCircle操作
   */
  flag: PropTypes.bool,
  /**
    * IconPlayWellの高さを変更できる。
    */
  height: PropTypes.number,
    /**
     * IconRac/IconPlayWellのlink先を設定する。
     */
  link: PropTypes.string,
  order: PropTypes.number,
    /**
     * IconRacの大きさを変更できる。
     */
  size: PropTypes.number,
    /**
     * IconPlayWellの横幅を変更できる。
     */
  width: PropTypes.number,
}

HeaderLogo.defaultProps = {
  color: '#fff',
  flag: false,
  height: 30,
  link: "/",
  order: 1,
  size: 60,
  width: 180,
}

export default HeaderLogo