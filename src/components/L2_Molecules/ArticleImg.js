import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  return {
    src: `${props.src}`,
    style: {
      borderRadius: `${props.radius}`,
      width: `${props.width}`,
    },
  };
})`
  justify-content: center;
  margin: 0 auto;
  transform: scale(1);
`;

const ArticleImg = (props) => {
  return (
    <ArticleWrapper
      height={props.height}
      imageMargin={props.imageMargin}
      overflow={props.overflow}
      order={props.order}
    >
      <a href={props.link}>
        <BlogTopImg
          src={props.src}
          radius={props.imageRadius}
          width={props.width}
        />
      </a>
    </ArticleWrapper>
  );
};

ArticleImg.propTypes = {
  height: PropTypes.string,
  link: PropTypes.string,
  imageRadius: PropTypes.string,
  src: PropTypes.string,
  imageMargin: PropTypes.string,
  overflow: PropTypes.string,
  order: PropTypes.number,
  width: PropTypes.string,
};

ArticleImg.defaultProps = {
  height: '100%',
  link: '#',
  imageMargin: 'calc(30rem/16) auto 0 auto',
  imageRadius: 'calc(1rem/1.6)',
  src:
    'https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/2687c64d1e7e4a8b8fef792ff909ea81/cat_four.jpg',
  overflow: 'hidden',
  width: 'calc(750rem/16)',
  order: 0,
};

export default ArticleImg;
