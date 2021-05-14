import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const AppRouter = () => {
  console.log('router called');
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;

// http://localhost:8082/article/dist/assets/favicon.ico
// http://localhost:8082/article/dist/bundle.js?7b667c5338b3b98a24f8
// http://localhost:8082/dist/assets/android-chrome-144x144.png
