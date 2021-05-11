import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

// {id: "8f305df0-62b9-4768-9184-dcee36d71782", title: "first blog", note: "1 create blog now one", link: ""}

const Home = (props) => {
  return (
    <Wrapper>
      <Container>
        <Heading>Home Components</Heading>
        <Unordered>
          {props.blogData.map((blogArticle, num) => {
            return (
              <ListItem key={`${num}_${blogArticle.id}`}>
                {blogArticle.title} / {blogArticle.note}
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
    blogData: state.blogData,
  };
};

export default connect(mapStateToProps)(Home);
export { Home };
