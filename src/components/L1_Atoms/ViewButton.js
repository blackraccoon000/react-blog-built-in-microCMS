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
      fontSize: `${props.fontSize/16}rem`,
      fontWeight: `${props.fontWeight}`,
      margin: `${props.btnMargin}`
    }
  }
})`
  appearance:none;
  border-radius: calc(2.4rem/1.6);
  cursor: pointer;
  outline:none;
  padding: calc(.8rem/1.6) calc(1.5rem/1.6);
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
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  margin: PropTypes.string,
  btnMargin: PropTypes.string,
}

ViewButton.defaultProps = {
  bGColor: "#61b1c8",
  border: "#e6e6e6 calc(.2rem/1.6) solid",
  color: "#e6e6e6",
  fontFamily: 'monospace',
  fontSize: 8,
  fontWeight: 600,
  margin: "calc(.2rem/1.6) calc(1rem/1.6) 0 0",
  btnMargin: "calc(1rem/1.6) 0 0 0",
  value: "VIEW MORE"
}

export default ViewButton