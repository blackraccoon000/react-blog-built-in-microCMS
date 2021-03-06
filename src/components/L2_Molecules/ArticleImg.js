import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleWrapper = styled.div.attrs((props) => {
  return {
    style: {
      height: `${props.height}`,
      margin: `${props.imageMargin}`,
      overflow: `${props.overflow}`,
      order: `${props.order}`,
    },
  };
})`
  justify-content: center;
`;

const BlogTopImg = styled.img.attrs((props) => {
  const width =
    window.parent.screen.width < 800 ? window.parent.screen.width : 800;
  return {
    src: `${props.src}?w=${width}`,
    loading: 'lazy',
    style: {
      borderRadius: `${props.radius}`,
      width: `${props.width}`,
      height: `${props.imageHeight}`,
    },
  };
})`
  object-fit: cover;
  justify-content: center;
  margin: 0 auto;
  transform: scale(1);
`;

const StyledLink = styled(Link)``;

const ArticleImg = (props) => {
  return (
    <ArticleWrapper
      height={props.height}
      imageMargin={props.imageMargin}
      overflow={props.overflow}
      order={props.order}
    >
      {props.flag ? (
        <StyledLink to={props.link}>
          <BlogTopImg
            src={props.src}
            radius={props.imageRadius}
            width={props.width}
            imageHeight={props.imageHeight}
          />
        </StyledLink>
      ) : (
        <BlogTopImg
          src={props.src}
          radius={props.imageRadius}
          width={props.width}
          imageHeight={props.imageHeight}
        />
      )}
    </ArticleWrapper>
  );
};

ArticleImg.propTypes = {
  cursor: PropTypes.string,
  flag: PropTypes.bool,
  height: PropTypes.string,
  imageHeight: PropTypes.string,
  link: PropTypes.string,
  imageRadius: PropTypes.string,
  src: PropTypes.string,
  imageMargin: PropTypes.string,
  overflow: PropTypes.string,
  order: PropTypes.number,
  width: PropTypes.string,
};

ArticleImg.defaultProps = {
  cursor: 'pointer',
  flag: true,
  height: '100%',
  imageHeight: 'auto',
  link: '#',
  imageMargin: 'calc(30rem/16) auto 0 auto',
  imageRadius: '',
  src:
    'https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/2687c64d1e7e4a8b8fef792ff909ea81/cat_four.jpg',
  overflow: 'hidden',
  width: 'calc(750rem/16)',
  order: 0,
};

export default ArticleImg;
