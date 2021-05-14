import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ArticleRoute from './ArticleRoute';
// import PrivateRoute from './PrivateRoute';

import Home from '../components/L5_Pages/Home';
import Help from '../components/L5_Pages/Help';
import ArticleContainer from '../components/L3_Organisms/ArticleContainer';

const AppRoutes = () => {
  console.log('aaaa');
  return (
    <Switch>
      <PublicRoute path="/" component={Home} exact={true} />
      <PublicRoute path="/help" component={Help} />
      {/* <ArticleRoute path="/:id" /> */}
      <ArticleRoute path="/article/:id" />
      <PublicRoute component={Home} />
    </Switch>
  );
};

export default AppRoutes;
