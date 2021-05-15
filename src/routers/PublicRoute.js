import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../components/L3_Organisms/HeaderContainer';
import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterContainer from '../components/L3_Organisms/FooterContainer';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      component={(rest) => {
        return (
          <>
            {/* <HeaderContainer /> */}
            <HeaderTurquoiseBlue/>
            <Component {...rest} />
            <FooterContainer />
          </>
        );
      }}
    />
  );
};

export default PublicRoute;
