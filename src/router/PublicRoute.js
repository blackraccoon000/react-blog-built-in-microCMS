import React from 'react';
import { Route } from 'react-router-dom';
import FooterContainer from '../components/L3_Organisms/FooterContainer';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      component={(rest) => {
        return (
          <div>
            <Component {...rest} />
            <FooterContainer />
          </div>
        );
      }}
    />
  );
};

export default PublicRoute;
