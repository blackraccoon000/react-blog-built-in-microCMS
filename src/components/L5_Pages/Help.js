import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
`;

const Heading = styled.h1.attrs((props) => {})`
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  margin: 30px 10px 10px 10px;
`;

const Unordered = styled.ul.attrs((props) => {})``;
const ListItem = styled.li.attrs((props) => {})`
  font-size: 15px;
  margin: 10px;

  :last-child {
    margin-bottom: 30px;
  }
`;

const Help = (props) => {
  return (
    <Wrapper>
      <Container>
        <Heading>Help Components</Heading>
        <Unordered>
          <ListItem>
            <Link to="/">Help</Link>
          </ListItem>
          {props.pages.map((page, num) => {
            return (
              <ListItem key={`${page.id}`}>
                <Link to={`/article/${page.id}`}>{`article/${page.id}`}</Link>
              </ListItem>
            );
          })}
        </Unordered>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
};

export default connect(mapStateToProps)(Help);
export { Help };
