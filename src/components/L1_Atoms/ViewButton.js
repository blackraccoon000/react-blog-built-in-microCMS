import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import IconChevonDown from "./IconChevonDown"

const Btn = styled.button.attrs(props => {
  return {
    style: {
      backgroundColor: `${props.bGColor}`,
      border: `${props.border}`,
      color: `${props.color}`,
      fontFamily: `${props.fontFamily}`,
      fontSize: `${props.fontSize}`,
      fontWeight: `${props.fontWeight}`,
      margin: `${props.btnMargin}`
    }
  }
})`
  appearance:none;
  border-radius: 24px;
  cursor: pointer;
  outline:none;
  padding: 8px 15px;
`

const Span = styled.span.attrs(props => {})`
  align-items: center;
  display: flex;
  position: relative;
`

const ViewButton = (props) => {
  return (
    <Btn {...props}>
      <Span>
        <IconChevonDown {...props}/>
        {props.value}
      </Span>
    </Btn>
  )
}

ViewButton.propTypes = {
  bGColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.oneOf(['source-code-pro',"kan415typos-std","monospace","sans-serif"]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  margin: PropTypes.string,
  btnMargin: PropTypes.string,
}

ViewButton.defaultProps = {
  bGColor: "#61b1c8",
  border: "#e6e6e6 2px solid",
  color: "#e6e6e6",
  fontFamily: 'monospace',
  fontSize: ".8rem",
  fontWeight: 600,
  margin: "2px 10px 0 0",
  btnMargin: "10px 0 0 0",
  value: "VIEW MORE"
}

export default ViewButton