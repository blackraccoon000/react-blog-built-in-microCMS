import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ArticleCard from '../L3_Organisms/ArticleCard';

const Wrapper = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Container = styled.div.attrs((props) => {})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1.attrs((props) => {})`
  font-family: 'Dancing Script', cursive;
  font-size: calc(30rem / 16);
  margin: calc(30rem / 16) calc(10rem / 16) calc(10rem / 16) calc(10rem / 16);
`;

const Unordered = styled.ul.attrs((props) => {})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: calc(20rem / 16) auto;
`;

const ListItem = styled.li.attrs((props) => {})`
  font-size: calc(15rem / 16);
  margin: calc(10rem / 16);

  :last-child {
    margin-bottom: calc(30rem / 16);
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
