import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ArticleRoute from './ArticleRoute';
import IndexRoute from './IndexRoute';
// import PrivateRoute from './PrivateRoute';

import Home from '../components/L5_Pages/Home';
import Help from '../components/L5_Pages/Help';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';

const AppRoutes = () => {
  return (
    <Switch>
      <IndexRoute path="/" exact={true} />
      <ArticleRoute path="/article/:id" />
      <PublicRoute path="/help" component={Help} />
    </Switch>
  );
};

export default AppRoutes;
