import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ArticleCard from "../L3_Organisms/ArticleCard"

const Wrapper = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff4f4;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: flex-start;
`;

const Container = styled.div.attrs((props) => {})`
  align-items: center;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 50px; */
  /* width: 1200px; */
`;

const Heading = styled.h1.attrs((props) => {})`
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  margin: 30px 10px 10px 10px;
`;

const Unordered = styled.ul.attrs((props) => {})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
`;

const ListItem = styled.li.attrs((props) => {})`
  font-size: 15px;
  margin: 10px;

  :last-child {
    margin-bottom: 30px;
  }
`;

const Home = (props) => {
  return (
    <Wrapper>
      <Container>
        <Unordered>
          {props.pages.map((page, num) => {
            return (
              <ListItem key={`${page.id}`}>
                <ArticleCard
                  src={page.thumbnail.url}
                  title={page.title}
                  link={`/article/${page.id}`}
                  createdAt={page.createdAt}
                  updatedAt={page.updatedAt}
                />
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

export default connect(mapStateToProps)(Home);
export { Home };
