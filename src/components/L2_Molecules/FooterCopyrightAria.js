import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div.attrs(props=>{
  return {
    style: {
      backgroundColor: `${props.bGColor}`
    }
  }
})`
  height: auto;
  left: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

const Link = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
    dataGaClick: `${props.ga}`,
    style: {
      color: `${props.color}`,
      fontFamily: `${props.fontFamily}`
    }
  };
})`
  font-size: calc(1.5rem/1.6);
  letter-spacing: .05rem;
  line-height: 1.5;
  text-decoration:none;
  margin: calc(1rem/1.6) 0 calc(.5rem/1.6) 0;
`;

const Comment = styled.p.attrs(props=>{
  return {
    style: {
      color:`${props.color}`,
      fontFamily: `${props.fontFamily}`
    }
  }
})`
  font-size: calc(1.36rem/1.6);
  letter-spacing: .05rem;
  line-height: 1.5;
  margin: 0  0 calc(5rem/1.6) 0;
`

const FooterCopyrightAria = (props) => {
  return (
    <Wrapper bGColor={props.bGColor}>
      <Container>
        <Link
          color={props.color}
          fontFamily={props.fontFamily}
          link={props.link}
          ga={props.ga}
        >
          {props.linkLabel}
        </Link>
        <Comment
          color={props.color}
          fontFamily={props.fontFamily}
        >{props.value}</Comment>
      </Container>
    </Wrapper>
  );
};

FooterCopyrightAria.propTypes = {
  border: PropTypes.string,
  bGColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.oneOf(["kan415typos-std",'source-code-pro',"monospace","sans-serif"]),
  link: PropTypes.string,
  linkLabel: PropTypes.string,
  value: PropTypes.string,
  ga: PropTypes.string,
}

FooterCopyrightAria.defaultProps = {
  border: "#e2e1de 2px solid",
  bGColor: "#61b1c8",
  color: "#e6e6e6",
  fontFamily: "kan415typos-std",
  link: '/',
  linkLabel: '© 2021 PlayWell,Inc',
  value: "If you can dream it, you can do it.",
  ga: 'Footer, go to home, text:home',
}

export default FooterCopyrightAria;