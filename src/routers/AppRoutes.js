import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ArticleRoute from './ArticleRoute';
import KeywordRoute from './KeywordRoute';
import OneKeywordRoute from './OneKeywordRoute';
import ArticleCardListRoute from './ArticleCardListRoute';
// import PrivateRoute from './PrivateRoute';

// import Home from '../components/L5_Pages/Home';
import Help from '../components/L5_Pages/Help';
import About from '../components/L5_Pages/About';

const AppRoutes = () => {
  return (
    <Switch>
      <ArticleCardListRoute path="/" exact={true} />
      <ArticleRoute path="/article/:id" />
      <KeywordRoute path="/keywords" />
      <OneKeywordRoute path="/keyword/:id" />
      {/* <PublicRoute path="/help" component={Help} /> */}
      <PublicRoute path="/about" component={About} />
    </Switch>
  );
};

export default AppRoutes;
