import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../components/L3_Organisms/HeaderContainer';
import FooterContainer from '../components/L3_Organisms/FooterContainer';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      component={(rest) => {
        return (
          <>
            <HeaderContainer />
            <Component {...rest} />
            <FooterContainer />
          </>
        );
      }}
    />
  );
};

export default PublicRoute;
