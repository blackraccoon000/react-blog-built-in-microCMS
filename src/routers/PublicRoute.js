import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../components/L3_Organisms/HeaderContainer';
import HeaderTurquoiseBlue from '../components/L3_Organisms/HeaderTurquoiseBlue';
import FooterContainer from '../components/L3_Organisms/FooterContainer';
import FooterTurquoiseBlue from "../components/L3_Organisms/FooterTurquoiseBlue"

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
            {/* <FooterContainer /> */}
            <FooterTurquoiseBlue />
          </>
        );
      }}
    />
  );
};

export default PublicRoute;
