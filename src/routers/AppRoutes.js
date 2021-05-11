import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

import Home from '../components/L5_Pages/Home';

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/" component={Home} exact={true} />
    </Switch>
  );
};

export default AppRoutes;
