// import { indexSetup } from '../actions/common';

const acquiredUpdater = (dispatch, props) => {
  const { articles, views, status } = props;
  articles.length !== 0
    ? // ? dispatch(indexSetup(articles))
      console.log('viewArticles is ', props.views.viewArticles.length)
    : console.log('viewArticles is ', props.views.viewArticles.length);
};

export default acquiredUpdater;
